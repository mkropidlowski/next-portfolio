import * as React from "react";
import { SVGProps } from "react";
const SvgEmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4 9 6.2 4.65a3 3 0 0 0 3.6 0L20 9"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 9.177a2 2 0 0 1 1.029-1.749l7-3.888a2 2 0 0 1 1.942 0l7 3.888A2 2 0 0 1 21 9.177V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.177Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgEmailIcon;
