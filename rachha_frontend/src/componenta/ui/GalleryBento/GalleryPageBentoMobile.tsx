import { Gallery_Data as DEMO_ITEMS } from "../../../data/GalleryData";
import type { GalleryData as GalleryItem } from "../../../data/GalleryData";

export default function GalleryPageBentoMobile({
  items = DEMO_ITEMS as GalleryItem[],
}: {
  items?: GalleryItem[];
}) {
  const source = (items && items.length > 0) ? items : (DEMO_ITEMS as GalleryItem[]);

  return (
    <div style={{ padding: "4px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
        {source.map((item) => (
          <div
            key={item.id}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "3/4",
              background: "#1a0e02",
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "8px",
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "Georgia, serif",
                  fontSize: "12px",
                  color: "#D4AF37",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
