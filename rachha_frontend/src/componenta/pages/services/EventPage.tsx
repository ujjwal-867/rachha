import { ServiceBentoGrid } from '../../ui/bento/ServiceBentoGrid';
import { ServiceHeroSection } from '../../ui/hero/ServiceHeroSection';
import { getEventBySlug, getHeroMediaItems, getBentoMediaItems, getServiceImageUrl } from '../../../data/eventData';
import Seo from '../../../seo/Seo';
import { SITE_URL, SITE_NAME } from '../../../seo/siteConfig';

interface EventPageProps {
  eventSlug: string;
}

function truncateDescription(text: string, max = 155): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export default function EventPage({ eventSlug }: EventPageProps) {
  const event = getEventBySlug(eventSlug);

  if (!event) {
    return (
      <main className="relative bg-roseMist min-h-screen flex items-center justify-center">
        <p className="text-charcoal/60 font-serif text-xl">Event not found</p>
      </main>
    );
  }

  const heroMediaItems = getHeroMediaItems(eventSlug);
  const mediaItems = getBentoMediaItems(eventSlug);

  const servicesIncluded = event.servicesIncluded.map((service) => ({
    title: service,
    url: getServiceImageUrl(service),
  }));

  const canonical = `${SITE_URL}/services/${event.slug}`;

  return (
    <main className="relative bg-roseMist">
      <Seo
        title={`${event.title} | ${SITE_NAME} Event Management`}
        description={truncateDescription(event.description)}
        canonical={canonical}
        ogType="article"
        ogImage={heroMediaItems[0]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: event.title,
          description: event.description,
          url: canonical,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          organizer: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
        }}
      />
      <ServiceHeroSection
        title={event.title}
        subtitle={event.subtitle}
        mediaItems={heroMediaItems}
      />

      <ServiceBentoGrid
        title={event.title}
        description={event.description}
        mediaItems={mediaItems}
        servicesImages={servicesIncluded}
      />
    </main>
  );
}
