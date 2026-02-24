import React from "react";
import ServicePage from "./Servicepage";
import Img from "../../imgs/carousel/img-3.jpg";

const PrivateEquityAndVentureCapital = () => {
  return (
    <ServicePage
      title="Private Equity and Venture Capital"
      heroImage={Img}
      paragraphs={[
        "Our expertise and in-depth understanding of the foreign exchange control regime of India qualify us to handle complex venture capital and private equity transactions. The government of India has been continuously proposing several measures to enable entrepreneurship and ease of doing business in India. This has enabled a lot of offshore funds to look at India as a favourable investment destination. The ever-rising start-up culture has also given a boost to a lot of venture capital funds. A large number of start-ups have now been classified as unicorns with an even larger number of soonicorns (i.e. start-ups with the potential to become unicorns). The advent of tech-based start-ups has also pushed the dream of a 5 trillion dollar economy.",
        "We ensure that our clients receive advise that is mindful of the ever-changing regulatory landscape. Our understanding of the dynamic nature of the Indian market drives our objective to provide end-goal-oriented advise. We excel at identifying legal and sector-specific risks and ensure that the solutions being provided are pragmatic and efficient. We provide end-to-end advise beginning from the term sheet to post-closing actions and eventually towards undertaking a suitable exit. We aim at pre-empting issues and proactively providing effective resolutions to the client.",
      ]}
      accordions={[]} // No accordion sections specified
    />
  );
};

export default PrivateEquityAndVentureCapital;
