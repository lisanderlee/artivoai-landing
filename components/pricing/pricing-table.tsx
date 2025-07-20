import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Subheading } from "@/components/text";
import { Link } from "@/components/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CheckIcon, MinusIcon, ChevronsUpDownIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

const tierSlugs = ["starter", "growth", "enterprise"] as const;

export function PricingTable() {
  const t = useTranslations("Pricing");
  const searchParams = useSearchParams();
  const selectedTier = searchParams.get("tier") || "starter";

  // Dynamically extract all sections and feature names from the first tier
  const firstTierFeatures = t.raw(`${tierSlugs[0]}.features`) as Record<
    string,
    Record<string, string | boolean>
  >;

  const sections = Object.keys(firstTierFeatures);
  const featureNamesPerSection = sections.reduce<Record<string, string[]>>(
    (acc, section) => {
      acc[section] = Object.keys(firstTierFeatures[section]);
      return acc;
    },
    {}
  );

  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tierSlugs[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tierSlugs[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tierSlugs[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tierSlugs.map((tier) => (
              <th
                key={tier}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{t(`${tier}.name`)}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {t(`${selectedTier}.name`)}
                    <ChevronsUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="w-48 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tierSlugs.map((tier) => (
                      <MenuItem key={tier}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {t(`${tier}.name`)}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronsUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href="#">
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tierSlugs.map((tier) => (
              <td
                key={tier}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href="#">
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {sections.map((section) => (
          <tbody key={section} className="group">
            <tr>
              <th
                scope="colgroup"
                colSpan={4}
                className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
              >
                <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                  {section}
                </div>
              </th>
            </tr>
            {featureNamesPerSection[section].map((featureName) => (
              <tr
                key={featureName}
                className="border-b border-gray-100 last:border-none"
              >
                <th
                  scope="row"
                  className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                >
                  {featureName}
                </th>
                {tierSlugs.map((tier) => {
                  const tierFeatures = t.raw(`${tier}.features`) as Record<
                    string,
                    Record<string, string | boolean>
                  >;
                  const value = tierFeatures[section]?.[featureName];

                  return (
                    <td
                      key={tier}
                      data-selected={selectedTier === tier ? true : undefined}
                      className="p-4 data-selected:table-cell max-sm:hidden"
                    >
                      {value === true ? (
                        <>
                          <CheckIcon className="size-4 fill-green-600" />
                          <span className="sr-only">
                            Included in {t(`${tier}.name`)}
                          </span>
                        </>
                      ) : value === false || value === undefined ? (
                        <>
                          <MinusIcon className="size-4 fill-gray-400" />
                          <span className="sr-only">
                            Not included in {t(`${tier}.name`)}
                          </span>
                        </>
                      ) : (
                        <div className="text-sm/6">{value}</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </Container>
  );
} 