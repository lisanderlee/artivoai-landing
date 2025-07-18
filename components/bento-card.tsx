"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import { Subheading } from "@/components/text";

export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-white shadow-xs ring-1 ring-white/5",
        "data-dark:bg-white/5 data-dark:ring-white/10"
      )}
    >
      <div className="relative h-80 shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-linear-to-b from-white to-50% group-data-dark:from-transparent group-data-dark:from-[-25%]" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-linear-to-t from-white to-50% group-data-dark:from-gray-100 group-data-dark:from-[-25%]" />
        )}
      </div>
      <div className="relative  p-5 lg:p-10">
        <Subheading as="h3" dark={dark}>
          <div className="w-fit bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
          {eyebrow}
          </div>
        </Subheading>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
