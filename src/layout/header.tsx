/* eslint-disable @next/next/no-img-element */
// import cc from "classcat";
import Image from "next/image";
import type { VFC } from "react";
import { CustomLink } from "src/components/CustomLink";
import { NavBarDesktop, NavBarMobile } from "src/components/navigation";

import { siteMetadata } from "../data/siteMetadata";

type Props = {
  className?: string;
  type?: "home" | "about" | "contact" | "article";
  theme?: "home" | "about" | "contact" | "article";
};

export const Header: VFC<Props> = (props) => {
  const themeImage = {
    home: "https://source.unsplash.com/1600x500/?nature,water",
    about: "https://source.unsplash.com/random/1600x500/?flower,pink",
    contact: "https://source.unsplash.com/random/1600x500/?mountain",
    article: "https://source.unsplash.com/random/1600x500/?mountain",
  };

  return (
    <>
      <header className="relative">
        <div className="relative">
          <Image
            width="100%"
            height="30%"
            layout="responsive"
            className="object-cover object-center pointer-events-none"
            src={themeImage[props.theme || "home"]}
            alt={"あああ"}
          />
          <h1 className="absolute -top-6 left-0">
            <CustomLink href="/" aria-label="Cattery Canon">
              <div className="flex justify-between items-center mb-8">
                <div
                  style={{
                    border: "double 5px #636363",
                    textShadow: "3px 3px 5px#ffffff",
                    color: "#71745b",
                  }}
                  className="p-3 my-6 text-2xl font-semibold whitespace-nowrap bg-clip-text bg-opacity-40 backdrop-filter backdrop-blur-lg sm:text-5xl"
                >
                  {siteMetadata.headerTitle}
                </div>
              </div>
            </CustomLink>
          </h1>
        </div>
        <div className="hidden px-2 pt-1 pb-3 bg-yellow-100 sm:block">
          {props.theme !== "article" && <NavBarDesktop />}
        </div>
        {props.theme !== "article" && <NavBarMobile />}
      </header>
    </>
  );
};
