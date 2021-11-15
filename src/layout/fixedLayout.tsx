import type { ReactNode, VFC } from "react";

import { Footer, Header } from ".";

type Props = {
  className?: string;
  children: ReactNode;
  theme?: "home" | "about" | "contact" | "article";
  type?: "home" | "about";
};

export const FixedLayout: VFC<Props> = (props) => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* <div>{!props.theme ? null : <Header theme={props.theme || "home"} />}</div> */}
      <div>
        {props.theme !== "about" ? (
          <Header theme={props.theme || "home"} />
        ) : (
          <Header theme={props.theme || "about"} type={props.type || "about"} />
        )}
      </div>
      <main className="z-40 flex-1">
        <div className="px-2 text-2xl divide-y-0 divide-x-4 sm:px-3 md:px-14 lg:px-24">
          <div className="mb-16">{props.children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
