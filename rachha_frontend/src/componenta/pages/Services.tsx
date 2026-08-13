

import Seo from "../../seo/Seo";
import {
  SITE_URL,
  SITE_KEYWORDS,
  SITE_OG_IMAGE,
} from "../../seo/siteConfig";

const Services = () => {
  return (
    <div>
      <Seo
        title="Our Event Services | Rachha"
        description="Explore Rachha's complete range of event services — décor, catering, photography, DJ, sound & lights, artists, entertainment and full event planning for weddings, birthdays, corporate and festive events."
        keywords={SITE_KEYWORDS}
        canonical={`${SITE_URL}/services`}
        ogImage={SITE_OG_IMAGE}
      />
    </div>
  )
}

export default Services