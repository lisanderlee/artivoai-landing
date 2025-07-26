import { useTranslations } from 'next-intl';
import { Container } from '@/components/container';
import { Heading, Subheading } from '@/components/text';

export default function PricingFrequentlyAskedQuestions() {
  const t = useTranslations('PricingFaqs');

  const items = t.raw('items') as { question: string; answer: string }[];

  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">{t('title')}</Subheading>
        <Heading as="div" className="mt-2 text-center">{t('subtitle')}</Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          {items.map((item, index) => (
            <dl key={index}>
              <dt className="text-sm font-semibold">{item.question}</dt>
              <dd className="mt-4 text-sm/6 text-gray-600">{item.answer}</dd>
            </dl>
          ))}
        </div>
      </section>
    </Container>
  );
}