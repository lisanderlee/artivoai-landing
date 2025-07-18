"use client";
import { useTranslations } from "next-intl";
import * as Headless from "@headlessui/react";
import { ArrowRightIcon } from "lucide-react";
import { clsx } from "clsx";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import useMeasure, { type RectReadOnly } from "react-use-measure";
import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { Heading, Subheading } from "@/components/text";
import { FadeInStagger, FadeIn } from "../fade-in";

const testimonials = [
  {
    img: "/testimonials/tina-yards.jpg",
    name: "User1.Name",
    title: "User1.Title",
    quote: "User1.Quote",
  },
  {
    img: "/testimonials/conor-neville.jpg",
    name: "User2.Name",
    title: "User2.Title",
    quote: "User2.Quote",
  },
  {
    img: "/testimonials/amy-chase.jpg",
    name: "User3.Name",
    title: "User3.Title",
    quote: "User3.Quote",
  },
  {
    img: "/testimonials/veronica-winton.jpg",
    name: "User4.Name",
    title: "User4.Title",
    quote: "User4.Quote",
  },
  {
    img: "/testimonials/dillon-lenora.jpg",
    name: "User5.Name",
    title: "User5.Title",
    quote: "User5.Quote",
  },
  {
    img: "/testimonials/harriet-arron.jpg",
    name: "User6.Name",
    title: "User6.Title",
    quote: "User6.Quote",
  },
];

function TestimonialCard({
  name,
  title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}: {
  img: string;
  name: string;
  title: string;
  children: React.ReactNode;
  bounds: RectReadOnly;
  scrollX: MotionValue<number>;
} & HTMLMotionProps<"div">) {
  const ref = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("Testimonials");
  const computeOpacity = useCallback(() => {
    const element = ref.current;
    if (!element || bounds.width === 0) return 1;

    const rect = element.getBoundingClientRect();

    if (rect.left < bounds.left) {
      const diff = bounds.left - rect.left;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else if (rect.right > bounds.right) {
      const diff = rect.right - bounds.right;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else {
      return 1;
    }
  }, [ref, bounds.width, bounds.left, bounds.right]);

  const opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  });

  useLayoutEffect(() => {
    opacity.set(computeOpacity());
  }, [computeOpacity, opacity]);

  useMotionValueEvent(scrollX, "change", () => {
    opacity.set(computeOpacity());
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              “
            </span>
            {children}
            <span aria-hidden="true" className="absolute">
              ”
            </span>
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">{t(name)}</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              {t(title)}
            </span>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  );
}

function CallToAction() {
  const t = useTranslations("Testimonials");
  return (
    <div>
      <p className="max-w-sm text-sm/6 text-gray-600">{t("Claim")}</p>
      <div className="mt-2">
        <Link
          href="https://app.artivo.ai/"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
        >
          {t("cta")}
          <ArrowRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollX } = useScroll({ container: scrollRef });
  const [setReferenceWindowRef, bounds] = useMeasure();
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("Testimonials");
  useMotionValueEvent(scrollX, "change", (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth));
  });

  function scrollTo(index: number) {
    const gap = 32;
    const width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth;
    scrollRef.current!.scrollTo({ left: (width + gap) * index });
  }

  return (
    <div className="overflow-hidden  py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading className="text-white">{t("title")}</Subheading>
          <Heading as="h3" className="mt-2 text-white">
            {t("Eyebrow")}
          </Heading>
        </div>
      </Container>
      <FadeInStagger>
        <div
          ref={scrollRef}
          className={clsx([
            "mt-16 flex gap-8 px-(--scroll-padding)",
            "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth",
            "[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]",
          ])}
        >
          {testimonials.map(({ img, name, title, quote }, testimonialIndex) => (
            <FadeIn key={testimonialIndex}>
              <TestimonialCard
                key={testimonialIndex}
                name={name}
                title={title}
                img={img}
                bounds={bounds}
                scrollX={scrollX}
                onClick={() => scrollTo(testimonialIndex)}
              >
                {t(quote)}
              </TestimonialCard>
            </FadeIn>
          ))}
          <div className="w-2xl shrink-0 sm:w-216" />
        </div>
      </FadeInStagger>
      <Container className="mt-16">
        <div className="flex justify-between">
          <CallToAction />
          <div className="hidden sm:flex sm:gap-2">
            {testimonials.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to testimonial from ${name}`}
                className={clsx(
                  "size-2.5 rounded-full border border-transparent bg-gray-300 transition",
                  "data-active:bg-gray-400 data-hover:bg-gray-400",
                  "forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4"
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
