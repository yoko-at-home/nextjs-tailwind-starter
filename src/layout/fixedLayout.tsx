import type { ReactNode, VFC } from "react";

import { Footer, Header } from ".";

type Props = {
  className?: string;
  children: ReactNode;
  theme?: "home" | "about" | "contact" | "article";
};

export const FixedLayout: VFC<Props> = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>{!props.theme ? null : <Header theme={props.theme || "home"} />}</div>
      <main className="z-40 flex-1">
        <div className="flex justify-start px-2 text-2xl divide-y-0 divide-x-4 sm:px-3 md:px-14 lg:px-24">
          <div className="mb-16">{props.children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
