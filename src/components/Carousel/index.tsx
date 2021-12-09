import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function Carousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Image layout="fill" src="/static/images/0_top/baby-mainecoon.webp" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image layout="fill" src="/static/images/0_top/baby-mainecoon.webp" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image layout="fill" src="/static/images/0_top/baby-mainecoon.webp" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image layout="fill" src="/static/images/0_top/baby-mainecoon.webp" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image layout="fill" src="/static/images/0_top/baby-mainecoon.webp" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image layout="fill" src="/static/images/0_top/baby-mainecoon.webp" />
        </div>
      </div>
      <style jsx>{`
        [class^="number-slide"],
        [class*=" number-slide"] {
          // background: grey;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 50px;
          color: #fff;
          font-weight: 500;
          height: 100vh;
          max-height: 100vh;
        }

        .number-slide1 {
          background: rgb(64, 175, 255);
          background: linear-gradient(128deg, rgba(64, 175, 255, 1) 0%, rgba(63, 97, 255, 1) 100%);
        }

        .number-slide2 {
          background: 'top / cover no-repeat url("/static/images/0_top/baby-mainecoon.webp")';
        }

        .number-slide3 {
          background: 'top / cover no-repeat url("/static/images/0_top/baby-mainecoon.webp")';
        }

        .number-slide4 {
          background: 'top / cover no-repeat url("/static/images/0_top/baby-mainecoon.webp")';
        }

        .number-slide5 {
          background: 'top / cover no-repeat url("/static/images/0_top/baby-mainecoon.webp")';
        }

        .number-slide6 {
          background: 'top / cover no-repeat url("/static/images/0_top/baby-mainecoon.webp")';
        }
      `}</style>
    </>
  );
}
