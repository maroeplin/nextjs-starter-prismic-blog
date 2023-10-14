import * as prismic from "@prismicio/client";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

const Text = ({ slice }) => {
  return (
    <Bounded as="section">
      {prismic.isFilled.richText(slice.primary.text) && (
        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed grid grid-cols-2 gap-16">
          <PrismicRichText field={slice.primary.textleft} />
          <PrismicRichText field={slice.primary.textright} />
          
        </div>
      )}
    </Bounded>
  );
};

export default Text;
