import React from "react";
import { rightImg, watchImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  // const scrollRef = useRef();

  // useGSAP(() => {
  //   const boxes = gsap.utils.toArray(scrollRef.current.children);

  //   boxes.forEach((box) => {
  //     gsap.to(box, {
  //       y: 0,
  //       opacity: 1,
  //       delay: 1.5,
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: box,

  //         scrub: true,
  //       },
  //     });
  //   });
  // }, []);

  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to('.link',{opacity:1,y:0,duration:1,stagger:0.5})
  });

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        {/* 
      <VideoCarousel /> */}
      </div>
    </section>
  );
};

export default Highlights;
