import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export interface BubbleData {
	image: string;
	text: string;
}

interface FloatingBubblesProps {
	bubbles: BubbleData[];
	smallSize?: number;
	largeSize?: number;
	className?: string;
	columnsPerRow?: number;
}

type ContainerSize = {
	width: number;
	height: number;
};

export function FloatingBubbles({
	bubbles,
	smallSize = 124,
	largeSize = 300,
	className,
	columnsPerRow,
}: FloatingBubblesProps) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [containerSize, setContainerSize] = useState<ContainerSize>({ width: 0, height: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = containerRef.current;

		if (!element) {
			return;
		}

		const measure = () => {
			const rect = element.getBoundingClientRect();

			setContainerSize({
				width: rect.width,
				height: rect.height,
			});
		};

		measure();

		const resizeObserver = new ResizeObserver(() => {
			measure();
		});

		resizeObserver.observe(element);
		window.addEventListener('resize', measure);

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('resize', measure);
		};
	}, []);

	const bubbleCount = bubbles.length;
	if (bubbleCount === 0) {
		return null;
	}

	const columns = (() => {
		if (columnsPerRow && columnsPerRow > 0) {
			return Math.min(columnsPerRow, bubbleCount);
		}
		if (bubbleCount <= 1) return 1;
		if (bubbleCount === 2) return 2;
		if (containerSize.width < 520) return Math.min(2, bubbleCount);
		if (containerSize.width < 820) return Math.min(3, bubbleCount);
		if (containerSize.width < 1200) return Math.min(4, bubbleCount);
		return Math.min(5, bubbleCount);
	})();

	const rows = Math.max(1, Math.ceil(bubbleCount / columns));
	const paddingX = containerSize.width < 640 ? 14 : 20;
	const paddingY = containerSize.height < 420 ? 6 : 10;
	const availableWidth = Math.max(containerSize.width - paddingX * 2, 0);
	const availableHeight = Math.max(containerSize.height - paddingY * 2, 0);

	const horizontalGap = containerSize.width < 640 ? 12 : 16;
	const verticalGap = containerSize.height < 500 ? 12 : 16;
	const fitByWidth = columns > 0 ? (availableWidth - horizontalGap * (columns - 1)) / columns : availableWidth;
	const fitByHeight = rows > 0 ? (availableHeight - verticalGap * (rows - 1)) / rows : availableHeight;

	const densityFactor = Math.max(0.72, 1 - Math.max(0, bubbleCount - 6) * 0.04);
	const sparseBoost = bubbleCount <= 4 ? 1.2 : bubbleCount <= 6 ? 1.08 : 1;
	const adaptivePreferredSize = smallSize * densityFactor * sparseBoost;

	const bubbleDiameter = Math.min(
		adaptivePreferredSize,
		Math.max(64, Math.min(fitByWidth, fitByHeight)),
	);

	const hoverBoost = bubbleCount <= 6 ? 1.55 : bubbleCount <= 10 ? 1.42 : 1.32;
	const hoverDiameter = Math.min(
		largeSize,
		Math.max(
			bubbleDiameter * hoverBoost,
			Math.min(fitByWidth * 1.22, fitByHeight * 1.22),
		),
	);

	const rowData = Array.from({ length: rows }, (_, rowIndex) => {
		const start = rowIndex * columns;
		const items = bubbles.slice(start, start + columns);

		return {
			start,
			items,
		};
	});

	const getGridDistance = (index: number) => {
		if (hoveredIndex === null) {
			return Infinity;
		}

		const row = Math.floor(index / columns);
		const col = index % columns;
		const hoveredRow = Math.floor(hoveredIndex / columns);
		const hoveredCol = hoveredIndex % columns;

		const dx = col - hoveredCol;
		const dy = row - hoveredRow;

		return Math.sqrt(dx * dx + dy * dy);
	};

	const getBubbleMotion = (index: number) => {
		const gridDistance = getGridDistance(index);
		const influence = Number.isFinite(gridDistance) ? Math.max(0, 1 - gridDistance / 2.4) : 0;
		const neighborLift = influence ** 0.75;
		const neighborScaleMax = bubbleCount <= 6 ? 0.44 : bubbleCount <= 10 ? 0.36 : 0.28;

		const isHoveredBubble = hoveredIndex === index;
		const size = isHoveredBubble
			? hoverDiameter
			: bubbleDiameter * (1 + neighborScaleMax * neighborLift);

		return {
			x: 0,
			y: 0,
			size,
			rotate: 0,
			isHoveredBubble,
		};
	};

	return (
		<div
			ref={containerRef}
			className={[
				'absolute inset-0 overflow-visible pointer-events-auto',
				className ?? '',
			].join(' ')}
		>
			<div className="flex h-full w-full flex-col items-center justify-center px-3 py-0 md:px-4 md:py-0">
				<div className="flex w-full flex-col items-center justify-center gap-y-4 md:gap-y-5">
				{rowData.map((row) => (
					<div key={`row-${row.start}`} className="flex w-full justify-center gap-x-3 md:gap-x-4">
						{row.items.map((bubble, itemIndex) => {
							const index = row.start + itemIndex;
							const isHovered = hoveredIndex === index;
							const motionState = getBubbleMotion(index);
							const displaySize = motionState.size;

							return (
								<motion.div
									key={`${bubble.text}-${index}`}
									className="relative flex min-h-[1px] items-center justify-center cursor-pointer"
									style={{ zIndex: isHovered ? 30 : 10 }}
									animate={{
										x: motionState.x,
										y: motionState.y,
										rotate: motionState.rotate,
									}}
									transition={{ type: 'spring', stiffness: 340, damping: 24 }}
									whileHover={{ zIndex: 40 }}
									onHoverStart={() => setHoveredIndex(index)}
									onHoverEnd={() => setHoveredIndex(null)}
									onClick={() => {
										if (hoveredIndex === index) {
											setHoveredIndex(null);
										} else {
											setHoveredIndex(index);
										}
									}}
								>
									<AnimatePresence>
										{motionState.isHoveredBubble && (
											<motion.div
												initial={{ opacity: 0, y: 12 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: 8 }}
												transition={{ duration: 0.2 }}
										className="pointer-events-none absolute bottom-full z-20 mb-3 rounded-full border border-royalGold/30 bg-white/90 px-3 py-1 text-center text-[11px] font-serif uppercase tracking-[0.12em] text-charcoal shadow-[0_10px_30px_rgba(61,53,34,0.14)] backdrop-blur-md"
												style={{
													left: '5%',
													transform: 'translateX(-50%)',
													width: 'max-content',
													maxWidth: 'min(220px, 62vw)',
													whiteSpace: 'normal',
													lineHeight: 1.2,
												}}
											>
												{bubble.text}
											</motion.div>
										)}
									</AnimatePresence>

									<motion.div
										className="relative flex-shrink-0 overflow-hidden rounded-full border border-royalGold/25 shadow-[0_14px_30px_rgba(61,53,34,0.18)]"
										animate={{
											width: displaySize,
											height: displaySize,
											boxShadow: motionState.isHoveredBubble
												? '0 34px 70px -18px rgba(61, 53, 34, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.26)'
												: '0 14px 30px -14px rgba(61, 53, 34, 0.18)',
										}}
										transition={{ type: 'spring', stiffness: 360, damping: 24 }}
									>
										<motion.div
											className="absolute inset-0"
											animate={{ scale: motionState.isHoveredBubble ? 1.14 : 1.03 }}
											transition={{ type: 'spring', stiffness: 360, damping: 24 }}
										>
											<img
												src={bubble.image}
												alt={bubble.text}
												className="h-full w-full object-cover"
											/>
										</motion.div>

										<div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />

										<motion.div
											className="absolute inset-0 rounded-full border-2"
											animate={{
												opacity: motionState.isHoveredBubble ? 1 : 0,
												borderColor: 'rgba(212, 175, 55, 0.8)',
												boxShadow: '0 0 48px rgba(212, 175, 55, 0.58)',
											}}
											transition={{ duration: 0.25 }}
										/>
									</motion.div>
								</motion.div>
							);
						})}
					</div>
				))}
				</div>
			</div>
		</div>
	);
}
