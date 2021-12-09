/* eslint-disable @next/next/no-img-element */
import cc from "classcat";
import Image from "next/image";
import type { VFC } from "react";
import { CustomLink } from "src/components/CustomLink";
import { NavBarDesktop, NavBarMobile } from "src/components/navigation";

import { siteMetadata } from "../data/siteMetadata";

type Props = {
  className?: string;
  type?: "home" | "about" ;
  theme?: "home" | "about" | "contact" | "article";
};

export const Header: VFC<Props> = (props) => {
  const themeImage = {
    home: "https://source.unsplash.com/1600x1200/?nature,water",
    about: "/static/images/header/empty.jpg",
    contact: "https://source.unsplash.com/random/1600x1200/?cat",
    article: "https://source.unsplash.com/random/1600x1200/?mountain",
  };
  const typeOpacity = cc([
    { "object-cover object-center opacity-20 pointer-events-none": props.type === "about" },
    { "object-cover object-center pointer-events-none": props.type !== "about" },
  ]);

  return (
    <>
      <header className="relative">
        <div className="relative">
          <div className="hidden md:block">
            ya
          </div>
          <div className="md:hidden">
            <Image
              width="100%"
              height="35%"
              layout="responsive"
              className={cc([typeOpacity])}
              src={themeImage[props.theme || "home"]}
              alt={"あああ"}
            />
          </div>
          <h1 className="absolute -top-6 left-0">
            <CustomLink href="/" aria-label="あああ">
              <div className="flex justify-between items-center mb-8">
                <div
                  style={{
                    // border: "double 5px #636363",
                    textShadow: "3px 3px 5px#ffffff",
                    color: "#71745b",
                  }}
                  className="p-2 my-6 text-2xl font-semibold whitespace-nowrap bg-clip-text bg-opacity-40 rounded backdrop-filter backdrop-blur-lg sm:text-5xl"
                >
                  {siteMetadata.headerTitle}
                </div>
              </div>
            </CustomLink>
          </h1>
        </div>
        <div className="hidden px-2 pt-2 bg-gray-200/80 sm:block">{props.theme !== "article" && <NavBarDesktop />}</div>
        {props.theme !== "article" && <NavBarMobile />}
      </header>
    </>
  );
};
