import type { ReactNode, VFC } from "react";

import { Footer, Header } from ".";

type Props = {
  className?: string;
  children: ReactNode;
  theme?: "home" | "contact";
};

export const FixedLayout: VFC<Props> = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="flex justify-center text-2xl divide-y-0 divide-x-4">
          <div>{props.children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
