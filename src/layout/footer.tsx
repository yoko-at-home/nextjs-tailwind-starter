/* eslint-disable @next/next/no-img-element */
import { CustomLink } from "src/components/CustomLink";
import { SocialIcon } from "src/components/SocialIcons";
import { siteMetadata } from "src/data/siteMetadata";

export const Footer = () => {
  return (
    <footer className="z-50">
      <div>
        {" "}
        <div className="flex flex-col items-center mt-16">
          <div className="flex mb-3 space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} width={20} height={20} />
            <SocialIcon kind="github" href={siteMetadata.github} width={20} height={20} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} width={20} height={20} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} width={20} height={20} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} width={20} height={20} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} width={20} height={20} />
          </div>
          <div className="flex mb-2 space-x-2 text-sm text-gray-500 ">
            <div>代表: {siteMetadata.author}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <CustomLink href="/">{siteMetadata.title}</CustomLink>
          </div>
          <div className="my-8 text-sm text-gray-500">
            <CustomLink href="https://yoko-2021.vercel.app/">Powered by yoko</CustomLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
