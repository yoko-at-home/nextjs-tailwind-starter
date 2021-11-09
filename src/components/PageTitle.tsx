import type { ReactNode, VFC } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const PageTitle: VFC<Props> = (props) => {
  return (
    <div className="mt-10 mb-5 text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10 md:mb-16 md:text-5xl md:leading-10 lg:mb-10">
      {props.children}
    </div>
  );
};
