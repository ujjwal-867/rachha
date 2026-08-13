import HeroSection from '../homepageSections/HeroSection';
import HomePageServiceFeature from '../homepageSections/HomePageServiceFeature';
import AboutSection from '../homepageSections/AboutSection';
import HomePageGalleryFeature from '../homepageSections/GalleryFeatureSection';
import TestonomialSection from '../homepageSections/TestonomialSection';
import ContactSection from '../homepageSections/ContactSection';
import Seo from '../../seo/Seo';
import {
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_OG_IMAGE,
} from '../../seo/siteConfig';

const Homepage = () => {


  return (
    <main>
      <Seo
        title="Rachha | Event Management & Party Planning Company"
        description={SITE_DESCRIPTION}
        keywords={SITE_KEYWORDS}
        canonical={`${SITE_URL}/`}
        ogImage={SITE_OG_IMAGE}
      />
      <HeroSection />
      <AboutSection />
      <HomePageServiceFeature />
      <HomePageGalleryFeature/>
      <TestonomialSection/>
      <ContactSection/>
    </main>
  );
};

export default Homepage;