import * as Headless from "@headlessui/react";
import { clsx } from "clsx";
import { Link } from "@/components/link";

const baseButton =
  "inline-flex items-center justify-center whitespace-nowrap font-medium";

const variants = {
  primary: clsx(
    baseButton,
    "px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-white shadow-md text-base text-black",
    "data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800"
  ),
  secondary: clsx(
    baseButton,
    "px-4 py-[calc(--spacing(2)-1px)] relative rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 text-base text-gray-950",
    "after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]",
    "data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20"
  ),
  outline: clsx(
    baseButton,
    "px-2 py-[calc(--spacing(1.5)-1px)] rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm text-gray-950",
    "data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
  ),
  "primary-icon": clsx(
    baseButton,
    "pl-5 py-2 pr-2  rounded-full border border-transparent bg-white shadow-md text-sm text-black",
    "data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray"
  ),
  "secondary-icon-outline": clsx(
    baseButton,
    "gap-2 pl-5 py-2 pr-2 group rounded-full border border-white/20 bg-transparent shadow-md text-sm text-white ring-1 ring-white/20",
    "data-disabled:opacity-40 data-hover:bg-white/10"
  ),
  
};

type ButtonProps = {
  variant?: keyof typeof variants;
  icon?: React.ReactNode;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
);

export function Button({
  variant = "primary",
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant]);

  // If children is a function (render prop), don't wrap or append icon
  if (typeof children === "function") {
    if (typeof props.href === "undefined") {
      // OK: Headless.Button supports render prop
      return (
        <Headless.Button {...props} className={className}>
          {children}
        </Headless.Button>
      );
    } else {
      // Not supported: Link does not support render prop
      throw new Error("Function as children (render prop) is not supported for Link");
    }
  }

  // Otherwise, append the icon
  return typeof props.href === "undefined" ? (
    <Headless.Button {...props} className={className}>
      {children}
      {icon && (
        <span className="ml-2 border group-hover:bg-white/50 border-white p-1 rounded-full">
          {icon}
        </span>
      )}
    </Headless.Button>
  ) : (
    <Link {...props} className={className}>
      {children}
      {icon && (
        <span className="ml-2 border group-hover:bg-white/50 border-black p-1 rounded-full">
          {icon}
        </span>
      )}
    </Link>
  );
}


{/* <button
  type="submit"
  class="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
  Explore
  <svg
    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      class="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
</button> */}