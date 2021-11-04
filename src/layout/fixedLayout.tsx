import type { ReactNode, VFC } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const FixedLayout: VFC<Props> = (props) => {
  return (
    <main>
      <div className="flex p-32 text-2xl divide-y-0 divide-x-4">FixedLayoutです</div>
      <div>{props.children}</div>
    </main>
  );
};
