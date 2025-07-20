"use client"
import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
];

export default function LanguageToggle({ mode = "light" }: { mode?: "dark" | "light" }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.replace(newPath);
  };

  // Set icon color based on mode
  const iconColor = mode === "dark" ? "text-white" : "text-black";
  const triggerTextColor = mode === "dark" ? "text-white" : "text-text-gray-600";

  return (
    <div className="flex h-full">
      <Select defaultValue={locale} onValueChange={handleChange}>
        <SelectTrigger
          className={`appearance-none outline-none ring-0 focus:outline-none shadow-none focus:ring-0 border-none bg-transparent ${triggerTextColor}`}
        >
          <Globe size={15} className={iconColor} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}