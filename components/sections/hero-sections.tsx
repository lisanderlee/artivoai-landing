
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Navbar1 } from '@/components/navbar1'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Hero() {
  const t = useTranslations('HeroSection')

  return (
    <div className="relative">
      <Gradient className="rounded-4xl absolute inset-2 bottom-0 ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar1 />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            {t('title')}
          </h1>
          <p className="mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {t('description')}
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">{t('cta')}</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div>
          <Image
            src="/heroImage.png"
            alt="Radiant hero image"
            width={1443}
            height={931}
            className="mt-16"
          />
          {/* <FeatureSection /> */}
        </div>
      </Container>
    </div>
  )
}