import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoTimeline } from '@/components/logo-timeline'
import { Heading, Subheading } from '@/components/text'
import { useTranslations } from "next-intl";

export default function BentoSection() {
      const t = useTranslations("BentoSection");
  return (
    <div className="rounded-4xl mx-2 mt-2 py-32">
      <Container>
        <Subheading dark>{t("Eyebrow")}</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
        {t("title")}
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow= {t("BotEyebrow")}
            title={t("BotTitle")}
            description={t("BotDescription")}
            graphic={
              <div className="bg-size-[851px_344px] h-80 bg-[url(/screenshots/networking.png)] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:rounded-tl-4xl lg:col-span-4"
          />
          <BentoCard
            dark
          eyebrow= {t("ModelsEyebrow")}
             title={t("ModelsTitle")}
            description={t("ModelsDescription")}
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="overflow-visible! lg:rounded-tr-4xl z-10 lg:col-span-2"
          />
          <BentoCard
            dark
            eyebrow= {t("ApiEyebrow")}
             title={t("ApiTitle")}
            description={t("ApiDescription")}
            graphic={<LinkedAvatars />}
            className="lg:rounded-bl-4xl lg:col-span-2"
          />
          <BentoCard
            dark
             eyebrow= {t("WorkflowEyebrow")}
             title={t("WorkflowTitle")}
            description={t("WorkflowDescription")}
            graphic={
              <div className="bg-size-[851px_344px] h-80 bg-[url(/screenshots/engagement.png)] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:rounded-br-4xl lg:col-span-4"
          />
        </div>
      </Container>
    </div>
  )
}



