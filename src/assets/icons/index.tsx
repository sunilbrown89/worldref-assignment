import { SVGProps } from "react";

export type IconType = JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>;

const ICONS = {
  DropDownIcon: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1.2em"
      width="1.2em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M128 192l128 128 128-128z"></path>
    </svg>
  ),
};

export default ICONS;
