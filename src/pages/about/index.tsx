import type { NextPage } from "next";
import Image from "next/image";
import { CustomLink } from "src/components/CustomLink";
import { NavBarDesktop, NavBarMobile } from "src/components/navigation";
// import { NavBarMobile } from "src/components/navigation";
import { siteMetadata } from "src/data/siteMetadata";
import { Footer } from "src/layout";

const About: NextPage = () => {
  return (
    <>
      <div className="relative">
        <div className="relative">
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            className="object-cover object-center pointer-events-none"
            src="https://source.unsplash.com/random/1600x500/?flower"
            alt={"About"}
          />
          <div className="absolute -top-6 left-32">
            <h1 className="mx-auto mt-16 text-center">
              <CustomLink href="/" aria-label="Gen-Scent">
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
          <div className="absolute top-52 sm:left-12 md:left-36 lg:left-72">
            <NavBarDesktop />
            <div className="">aaa</div>
          </div>
        </div>
        <NavBarMobile />
      </div>
      <Footer />
    </>
  );
};

export default About;
