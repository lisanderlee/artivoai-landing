import { Button } from "./ui/button";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface CTAPrimaryProps {
  text: string;
  icon?: LucideIcon;
  href: string;
}

export function PrimaryButton({ text, icon: Icon, href }: CTAPrimaryProps) {
  return (
    <Button
      asChild
      size="lg"
      className="rounded-full text-base  justify-center  bg-white text-black pl-4 pr-1.5 hover:bg-white/90 gap-2"
    >
      <Link href={href}>
        {text}
        <div className="border border-black  rounded-full p-1">
          {Icon && <Icon className="h-5 w-5" />}
        </div>
      </Link>
    </Button>
  );
}
