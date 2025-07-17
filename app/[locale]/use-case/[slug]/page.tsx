import { notFound } from 'next/navigation';

const useCases = {
  ecommerce: {
    title: 'E-commerce',
    description: 'Create product images and lifestyle visuals for your store in seconds.',
  },
  marketing: {
    title: 'Social Media',
    description: 'Generate content for posts, stories, and ads instantly.',
  },
  creatives: {
    title: 'Creative Agencies',
    description: 'Scale your visual production for client projects effortlessly.',
  },
};

// ✅ Default export function (async to handle Promise-based params)
export default async function UseCasePage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { slug } = await params;
  const useCase = useCases[slug as keyof typeof useCases];

  if (!useCase) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">{useCase.title}</h1>
      <p className="text-lg text-gray-600">{useCase.description}</p>
    </main>
  );
}
