import React, { useRef } from "react";
import { useGsapFooterHadline } from "../hooks/Gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHandleRef = useRef(null);

  useGsapFooterHadline(footerHandleRef, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHandleRef}>banjoori</h1>
      <p>{new Date().getFullYear()} immemorial created by badhon</p>
    </section>
  );
};

export default Footer;
