import { Button } from "./ui/button";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
interface CTASecondaryProps {
  text: string;
  icon?: LucideIcon;
  href: string;
}

export function SecondaryButton({ text, icon: Icon, href }: CTASecondaryProps) {
  return (
    <Button
      asChild
      variant="ghost"
      size="lg"
      className="rounded-full text-base border border-white text-white shadow-none gap-2 hover:bg-white/10 hover:text-white"
    >
      
      <Link href={href}>
        {text}
        {Icon && <Icon className="h-5 w-5" />}
      </Link>
    </Button>
  );
}
