import { ServiceBentoGrid } from '../../ui/bento/ServiceBentoGrid';
import { ServiceHeroSection } from '../../ui/hero/ServiceHeroSection';
import { SERVICES_INCLUDED } from '../../../data/servicesData';
import type { BubbleData } from '../../ui/button/FloatingBubbles';

const BirthdayCelebration = () => {
  const heroMediaItems = [
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
    'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200',
    'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200',
  ];

  const birthdayImages = [
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800',
    'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800',
  ];

  // Convert shared SERVICES_INCLUDED to BubbleData format
  const servicesIncluded: BubbleData[] = SERVICES_INCLUDED.map(service => ({
    image: service.imageUrl,
    text: service.title,
  }));

  return (
    <main className="relative bg-roseMist">
      <ServiceHeroSection
        title="Birthday Celebrations"
        subtitle="Create unforgettable moments with our premium celebration services"
        mediaItems={heroMediaItems}
      />

      <ServiceBentoGrid
        title="Birthday Celebrations"
        description="Celebrate life's special moments with thoughtfully curated birthday experiences that blend creativity, elegance, and seamless execution. From vibrant kids' parties to sophisticated milestone celebrations, every detail—from décor to entertainment—is designed to create a joyful and unforgettable atmosphere."
        mediaItems={birthdayImages}
        servicesImages={servicesIncluded}
      />
    </main>
  );
};

export default BirthdayCelebration;
