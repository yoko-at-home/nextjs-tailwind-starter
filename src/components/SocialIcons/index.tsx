/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react";

import Facebook from "./facebook-box-line.svg";
import Github from "./github-fill.svg";
import Instagram from "./instagram-line.svg";
import Mail from "./mail-line.svg";
import Twitter from "./twitter-fill.svg";
import Youtube from "./youtube-line.svg";

// Icons taken from:https://remixicon.com

type Props = {
  className?: string;
  kind?: "mail" | "facebook" | "twitter" | "instagram" | "github" | "youtube";
  href?: string;
  size?: number;
};

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  instagram: Instagram,
  twitter: Twitter,
};
export const SocialIcon: VFC<Props> = (props) => {
  if (!props.href) return null;

  const SocialSvg = components[props.kind || "mail"];
  // console.log(props.kind);

  return (
    <a
      className="text-sm text-gray-500 hover:text-gray-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
    >
      <span className="sr-only">{props.kind}</span>
      <SocialSvg className={`fill-current text-gray-700 hover:text-blue-500  h-${props.size} w-${props.size}`} />
    </a>
  );
};
