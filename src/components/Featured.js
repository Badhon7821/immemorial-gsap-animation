import React, { useRef } from "react";
import { useGsapLeftShutter, useGsapRightShutter } from "../hooks/Gsap";

const Featured = () => {
  const featuredRef = useRef(null);
  const featuredLeftShutter = useRef(null);
  const featuredRightShutter = useRef(null);

  useGsapLeftShutter(featuredLeftShutter, featuredRef);
  useGsapRightShutter(featuredRightShutter, featuredRef);
  return (
    <section className="featured wrapper" ref={featuredRef}>
      <h2 className="section-title">Featured</h2>
      <div className="features">
        <div className="feature-left">
          <span className="item-text">90's Telephone</span>
          <img
            src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Photo of Woman in Denim Jacket Holding Red Telephone"
          />
          <span className="left-shutter" ref={featuredLeftShutter}></span>
        </div>
        <div className="feature-right">
          <span className="item-text">90's Cassette Player</span>
          <img
            src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Women Sitting Together on the Floor"
          />
          <span className="right-shutter" ref={featuredRightShutter}></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
