
import CancellationGuidePage from '../components/CancellationGuidePage';
import servicesData from '@/servicesData.json';

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;

  if (!servicesData[service as keyof typeof servicesData]) {
    return <div>Service not found</div>;
  }

  return <CancellationGuidePage initialService={service} />;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({ service }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const serviceData = servicesData[service as keyof typeof servicesData];

  if (!serviceData) {
    return { title: 'Service Not Found - Chargeback' };
  }

  return {
    title: `How to Cancel ${serviceData.name} - Step-by-Step Guide | Chargeback`,
    description: serviceData.headline,
  };
}
