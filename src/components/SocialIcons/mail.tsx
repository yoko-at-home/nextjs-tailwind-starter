import type { VFC } from "react";

export const Mail: VFC<{ className?: string; width: number; height: number }> = (props) => {
    const width = props.width | 24;
    const height = props.height | 24;

  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"></path>
    </svg>
  );
};
