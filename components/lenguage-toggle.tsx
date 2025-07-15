"use client";
"use client";

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
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
];

export default function LanguageToggle() {
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

  return (
    <Select defaultValue={locale} onValueChange={handleChange}>
      <SelectTrigger>
        <Globe />
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
  );
}
