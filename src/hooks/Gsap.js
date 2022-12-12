import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapShutterUnvail = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1.4,
        ease: Expo.easeInOut,
        delay: delay,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapStraggerDown = (itemArr, delay = 0) => {
  useEffect(() => {
    const el = itemArr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: Expo.easeIn,
        delay: delay,
      }
    );
  }, []);
};

export const useGsapStraggerUp = (logoitem) => {
  useEffect(() => {
    const el = logoitem.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "200%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      }
    );
  }, []);
};

export const useGsapPhotoDropping = (item) => {
  useEffect(() => {
    const el = item.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100vh",
        scale: 0,
      },
      {
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        delay: 0.5,
        ease: Expo.easeIn,
      }
    );
  }, []);
};

export const useGsapPhotoLevilate = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 0,
      },
      {
        y: "-40%",
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapLeftShutter = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1.2,
        ease: Expo.easeIn,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapRightShutter = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 1.2,
        ease: Expo.easeIn,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapGalleryTitle = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "30%",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapGalleryCategory = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "100vw",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapGalleryImage = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: 0,
        width: 0,
      },
      {
        x: "30%",
        width: "100%",
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapFooterHadline = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        y: "-100%",
      },
      {
        y: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play",
        },
      }
    );
  }, []);
};
