import * as Headless from "@headlessui/react";
import { clsx } from "clsx";
import { Link } from "@/components/link";

const baseButton =
  "inline-flex items-center justify-center whitespace-nowrap font-medium";

// Button style variants
const variants = {
  // Main button with icon and rotation on hover
  "primary-icon": clsx(
    baseButton,
    "pl-4 py-2 pr-1 rounded-full  bg-white shadow-sm text-sm hover:bg-gray-200 text-black"
  ),
  "primary-icon-dark": clsx(
    baseButton,
    "px-5 py-2 rounded-full border border-transparent bg-black shadow-md  hover:bg-black/80 text-white"
  ),
  // Outlined button with icon
  "secondary-icon-outline": clsx(
    baseButton,
    "pl-4 py-1 pr-1 group rounded-full border border-white/70 bg-transparent hover:bg-white/10 hover:text-white text-sm text-white/70 ring-1 ring-white/20"
  ),
  // Simple outlined button, no icon
  "secondary-outline": clsx(
    baseButton,
    "px-5 py-2 rounded-full text-white border border-white bg-transparent  hover:bg-white/10 hover:text-white"
  ),
  "secondary-outline-gray": clsx(
    baseButton,
    "px-5 py-2 rounded-full text-gray-800 border border-gray-800 bg-transparent  hover:bg-white/10 hover:text-gray-600"
  ),
  "pricing-button": clsx(
    baseButton,
    "px-4 py-2  rounded-full border border-transparent bg-black shadow-md text-md hover:bg-black/80 text-white"
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
  variant = "primary-icon",
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant]);

  // If children is a function (render prop), don't wrap or append icon
  if (typeof children === "function") {
    if (typeof props.href === "undefined") {
      return (
        <Headless.Button {...props} className={className}>
          {children}
        </Headless.Button>
      );
    } else {
      throw new Error("Function as children (render prop) is not supported for Link");
    }
  }

  // For secondary-outline, do not render the icon
  const showIcon = icon && (variant === "primary-icon" || variant === "secondary-icon-outline");

  // Render as Headless.Button or Link
  if (typeof props.href === "undefined") {
    return (
      <Headless.Button {...props} className={className}>
        {children}
        {showIcon && (
          <span
            className={
              variant === "primary-icon"
                ? "ml-2 border group-hover:bg-white/50 border-white p-1 rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out "
                : "ml-2 border group-hover:bg-white/50 border-white/70 p-1 rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out "
            }
          >
            {icon}
          </span>
        )}
      </Headless.Button>
    );
  } else {
    return (
      <Link {...props} className={className}>
        {children}
        {showIcon && (
          <span
            className={
              variant === "primary-icon"
                ? "ml-2 border group-hover:bg-white/50 border-black p-1 rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out "
                : "ml-2 border group-hover:bg-white/50 border-white/70 p-1 rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out "
            }
          >
            {icon}
          </span>
        )}
      </Link>
    );
  }
}
