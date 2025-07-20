import { Button } from "@/components/button";
import { Subheading } from "@/components/text";
import { useTranslations } from "next-intl";
import { PlusIcon } from "./plus-icon";

interface PricingCardProps {
  slug: "starter" | "growth" | "enterprise";
}

export function PricingCard({ slug }: PricingCardProps) {
  const t = useTranslations("Pricing");

  const name = t(`${slug}.name`);
  const description = t(`${slug}.description`);
  const highlights = t.raw(`${slug}.highlights`) as string[];

  const priceMonthly = slug === "starter" ? 0 : slug === "growth" ? 8 : 28;

  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ${priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
              <p>per month</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href="#">Start a free trial</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Start selling with:
            </h3>
            <ul className="mt-3 space-y-3">
              {highlights.map((desc, i) => (
                <FeatureItem key={i} description={desc} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string;
  disabled?: boolean;
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-3.75 shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  );
} 