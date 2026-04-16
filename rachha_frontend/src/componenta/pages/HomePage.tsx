import HeroSection from '../homepageSections/HeroSection';
import AboutSection from '../homepageSections/AboutSection';
import Services from '../homepageSections/Services';

const Homepage = () => {
  return (
    <main>
      <HeroSection />
     <AboutSection/>
     <Services/>
    </main>
  );
};

export default Homepage;