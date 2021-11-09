/* eslint-disable @next/next/no-img-element */
import type { VFC } from "react";

import { Facebook } from "./facebook";
import { GitHub } from "./github";
import { Instagram } from "./instagram";
import { Mail } from "./mail";
import { Twitter } from "./twitter";
import { YouTube } from "./youtube";

// Icons taken from:https://remixicon.com
// convert using https://svg2jsx.com

type Props = {
  className?: string;
  kind?: "mail" | "facebook" | "twitter" | "instagram" | "github" | "youtube";
  href?: string;
  width?: number;
  height?: number;
};

const components = {
  mail: Mail,
  github: GitHub,
  facebook: Facebook,
  youtube: YouTube,
  instagram: Instagram,
  twitter: Twitter,
};
export const SocialIcon: VFC<Props> = (props) => {
  if (!props.href || (props.kind === "mail" && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(props.href)))
    return null;

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
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400`} width={0} height={0}/>
    </a>
  );
};
