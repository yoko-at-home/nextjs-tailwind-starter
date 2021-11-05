import type { ReactNode, VFC } from "react";

type Props = {
  children?: ReactNode;
  type?: "submit" | "reset";
};

export const Button: VFC<Props> = (props) => {
  return (
    <button
      type={props.type}
      className="p-2 w-full font-medium text-gray-200 bg-gradient-to-r from-gray-400 focus:from-purple-700 to-gray-500 focus:to-yellow-400 rounded-md focus:ring-2 focus:ring-offset-2 shadow-md focus:outline-none"
    >
      {props.children}
    </button>
  );
};
