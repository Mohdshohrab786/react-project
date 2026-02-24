import React from "react";
import SectionContainer from "./Section/Section";
import Heading from "./Heading2/Heading";

const Container = ({ title, placeholder, space, children, headingcolor }) => {
  return (
    <SectionContainer placeholder={placeholder}>
      <div className={space}>
        <Heading title={title} color={headingcolor} />
        {children}
      </div>
    </SectionContainer>
  );
};

export default Container;
