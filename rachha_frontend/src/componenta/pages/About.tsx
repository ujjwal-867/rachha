

import Seo from "../../seo/Seo";
import {
  SITE_URL,
  SITE_KEYWORDS,
  SITE_OG_IMAGE,
} from "../../seo/siteConfig";

const About = () => {
  return (
    <div>
      <Seo
        title="About Us | Rachha"
        description="Learn about Rachha, an event management company crafting unforgettable weddings, celebrations and corporate events with elegant décor and seamless execution."
        keywords={SITE_KEYWORDS}
        canonical={`${SITE_URL}/about`}
        ogImage={SITE_OG_IMAGE}
      />
    </div>
  )
}

export default About