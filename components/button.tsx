import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from "@/components/link"

const baseButton = 'inline-flex items-center justify-center whitespace-nowrap font-medium'

const variants = {
  primary: clsx(
    baseButton,
    'px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md text-base text-white',
    'data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800'
  ),
  secondary: clsx(
    baseButton,
    'px-4 py-[calc(--spacing(2)-1px)] relative rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 text-base text-gray-950',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20'
  ),
  outline: clsx(
    baseButton,
    'px-2 py-[calc(--spacing(1.5)-1px)] rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm text-gray-950',
    'data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50'
  ),
  'primary-icon-outline': clsx(
    baseButton,
    'gap-2 px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-gray-700 bg-transparent shadow-md text-base text-gray-950 ring-1 ring-gray-700',
    'data-disabled:opacity-40 data-hover:bg-gray-100'
  ),
  'secondary-icon-outline': clsx(
    baseButton,
    'gap-2 px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-white/20 bg-transparent shadow-md text-base text-white ring-1 ring-white/20',
    'data-disabled:opacity-40 data-hover:bg-white/10'
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
  icon?: React.ReactNode
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'primary',
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant])

  const content = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  )

  if (typeof props.href === 'undefined') {
    return (
      <Headless.Button {...props} className={className}>
        {content}
      </Headless.Button>
    )
  }

  return (
    <Link {...props} className={className}>
      {content}
    </Link>
  )
}
