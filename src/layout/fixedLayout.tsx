import { ReactNode, VFC } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const FixedLayout: VFC<Props> = (props) => {
  return (
    <main>
      <div className='text-lg p-3'>FixedLayoutです</div>
      <div>{props.children}</div>
    </main>
  );
};
