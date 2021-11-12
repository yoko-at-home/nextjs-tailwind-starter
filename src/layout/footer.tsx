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
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} />
          </div>
          <div className="flex mb-2 space-x-2 text-sm fill-current">
            <div>代表: {siteMetadata.author}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <CustomLink href="/">{siteMetadata.title}</CustomLink>
          </div>
          <div className="my-8 text-sm fill-current">
            <CustomLink href="https://yoko-2021.vercel.app/">Powered by yoko</CustomLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
