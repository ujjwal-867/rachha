import ServiceFeatureReel from '../ui/serviceReel/ServiceFeatureReel';
import { SERVICES, SERVICES_INCLUDED } from '../../data/servicesData';

export default function HomePageServiceFeature() {
  return (
    <section className="m-0 w-full overflow-hidden bg-roseMist pt-4 pb-1 md:pt-8 md:pb-2">
      <ServiceFeatureReel topItems={SERVICES} bottomItems={SERVICES_INCLUDED} />
    </section>
  );
}
