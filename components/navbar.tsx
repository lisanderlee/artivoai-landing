import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Film,
  Focus,
  Grip,
  ImageIcon,
  Menu,
  Ratio,
  Replace,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LanguageToggle from "./lenguage-toggle";
import Logo from "/public/Logo.svg";
import LogoBlack from "@/public/LogoBlack.svg"
import { Button } from "./button";
import Link from "next/link";
interface MenuItem {
  title: string;
  url?: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url?: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
  mode?: "dark" | "light";
}

const Navbar = ({
  logo = {
    url: "/",
    src: "@/public/logo.svg",
    alt: "logo",
    title: "artivo.ai",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "UseCases",
      items: [
        {
          title: "Creatives",
          description: "CreativesDescription",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/use-case/Creatives",
        },
        {
          title: "Ecommerce",
          description: "EcommerceDescription",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/use-case/Ecommerce",
        },
        {
          title: "Marketing",
          description: "MarketingDescription",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/use-case/Agency",
        },
      ],
    },
    {
      title: "Tools",
      url: "#",
      items: [
        {
          title: "ImageGeneration",
          description: "ImageGenerationDescription",
          icon: <ImageIcon className="size-5 shrink-0" />,
          url: "/#ImageGenerationID",
        },
        {
          title: "VideoGeneration",
          description: "VideoGenerationDescription",
          icon: <Film className="size-5 shrink-0" />,
          url: "/#VideoGenerationID",
        },
        {
          title: "BakckgroundChange",
          description: "BakckgroundChangeDescription",
          icon: <Focus className="size-5 shrink-0" />,
          url: "/#BakckgroundChangeID",
        },
        {
          description: "ProductTransferDescription",
          title: "ProductTransfer",
          icon: <Replace className="size-5 shrink-0" />,
          url: "/#ProductTransferID",
        },
        {
          description: "RetouchLabDescription",
          title: "RetouchLab",
          icon: <Grip className="size-5 shrink-0" />,
          url: "/#RetouchLabID",
        },
        {
          description: "ImageResizeDescription",
          title: "ImageResize",
          icon: <Ratio className="size-5 shrink-0" />,
          url: "/#ImageResizeID",
        },
      ],
    },
    {
      title: "Pricing",
      url: "/pricing",
    },
  ],
  auth = {
    login: { title: "Login", url: "https://app.artivo.ai/" },
    signup: { title: "cta", url: "https://app.artivo.ai/" },
  },
  mode = "dark",
}: Navbar1Props) => {
  const t = useTranslations("Navigation");

  // Determine text color classes based on mode
  const textColor = mode === "dark" ? "text-white" : "text-black";
  const hoverBg = mode === "dark" ? "hover:bg-white/10" : "hover:bg-black/10";
  const navMenuContentBg = mode === "dark" ? "bg-popover text-popover-foreground" : "bg-white text-black";
  const logoSrc = mode === "dark" ? Logo : LogoBlack;
  const hoverText = mode === "dark" ? "hover:text-white" : "hover:text-black";

  return (
    <section className="py-4 ">
      <div className="container relative flex">
        <nav className={`hidden w-full justify-between lg:flex`}>
          <a href={logo.url} className="flex items-center    ">
            <Image src={logoSrc} className="w-22" alt={logo.alt} width={120} height={40} />
          </a>
          <div className="flex items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item, t, textColor, hoverBg, navMenuContentBg, mode, hoverText))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2">
            <div className="z-50">
              <LanguageToggle />
            </div>
  
            <Button
              variant="primary-icon"
              icon={<ArrowUpRight className="h-5 w-5" />}
              href="https://app.artivo.ai/"
            >
              {t(auth.signup.title)}
            </Button>
          </div>
        </nav>

        <div className="block w-full lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <Image src={logoSrc} className="w-22 pl-1" alt={logo.alt} width={120} height={40} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary">
                  <Menu className="size-4 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <Image src={logoSrc} className="w-22 pt-1" alt={logo.alt} width={120} height={40} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item, t, textColor, hoverBg))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button>
                      <a href={auth.login.url}>{t(auth.login.title)}</a>
                    </Button>
                    <Button>
                      <a href={auth.signup.url}>{t(auth.signup.title)}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (
  item: MenuItem,
  t: ReturnType<typeof useTranslations>,
  textColor: string,
  hoverBg: string,
  navMenuContentBg: string,
  mode: "dark" | "light",
  hoverText: string
) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className={`bg-transparent ${textColor} text-[17px] ${hoverBg}`}>
          {t(item.title)}
        </NavigationMenuTrigger>
        <NavigationMenuContent className={navMenuContentBg}>
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80 ">
              <SubMenuLink item={subItem} t={t} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className={`group inline-flex h-10 w-max items-center ${textColor} ${hoverText} justify-center rounded-md px-4 py-2 text-[17px] font-medium ${hoverBg}`}
      >
        {t(item.title)}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (
  item: MenuItem,
  t: ReturnType<typeof useTranslations>,
  textColor: string,
  hoverBg: string
) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline ">
          {t(item.title)}
        </AccordionTrigger>
        <AccordionContent className="mt-2 ">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} t={t} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className={`text-md font-semibold ${textColor}`}>
      {t(item.title)}
    </a>
  );
};

const SubMenuLink = ({
  item,
  t,
}: {
  item: MenuItem;
  t: ReturnType<typeof useTranslations>;
}) => {
  return (
    <Link
      className="hover:bg-orange-50 hover:text-accent-foreground flex select-none flex-row items-center gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={`${item.url}`}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{t(item.title)}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {t(item.description)}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };
