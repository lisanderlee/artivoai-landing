"use client";
import { Container } from "@/components/container";
import { Footer } from "@/components/sections/footer-section";
import { GradientBackground } from "@/components/gradient";
import { Navbar } from "@/components/navbar";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/fade-in";
import { Heading } from "@/components/text";

export default function Terms() {
  const t = useTranslations("Terms");
  const sections = t.raw("sections") as Record<string, unknown>;

  return (
    <main className="overflow-hidden bg-white">
      <GradientBackground />
      <Container>
        <Navbar mode="light" />

        <div className="py-24 flex flex-col max-w-4xl">
          <FadeIn>
            <Heading as="h1" className="mt-2">
              {t("title")}
            </Heading>
            <p className="text-sm text-gray-500 mb-2 mt-2">
              {t("effectiveDate")}
            </p>
            <p className="text-xl text-gray-600 mb-8 mt-5">{t("intro")}</p>
          </FadeIn>
          <FadeIn>
            {Object.entries(sections).map(([key, section]) => {
              const s = section as {
                title?: string;
                body?: string;
                list?: string[];
              };
              return (
                <div key={key} className="mb-8">
                  <h2 className="mt-8 text-lg font-semibold">{s.title}</h2>
                  {s.body && <p className="mt-2 text-gray-700">{s.body}</p>}
                  {Array.isArray(s.list) && (
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      {s.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </FadeIn>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
