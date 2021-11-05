/* eslint-disable @next/next/no-img-element */
import { CustomLink } from "src/components/CustomLink";
import { SocialIcon } from "src/components/SocialIcons";
import { siteMetadata } from "src/data/siteMetadata";

export const Footer = () => {
  return (
    <footer>
      <div>
        {" "}
        <div className="flex flex-col items-center mt-16">
          <div className="flex mb-3 space-x-4">
            {/* <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} /> */}
            {/* <SocialIcon kind="github" href={siteMetadata.github} size={6} /> */}
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
            {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} /> */}
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
