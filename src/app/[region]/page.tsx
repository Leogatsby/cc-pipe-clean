import { notFound } from 'next/navigation';
import Header from '@/components/Main/1.Header/Header';
import Hero from '@/components/Main/2.Hero/Hero';
import Services from '@/components/Main/3.Services/Services';
import About from '@/components/Main/4.About/About';
import Contact from '@/components/Main/5.Contact/Contact';
import Footer from '@/components/Main/6.Footer/Footer';
import { regions } from './_RegionData/regions';
import './page.scss';

// Dynamic Metadata
export async function generateMetadata({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const regionData = regions[region];

  if (!regionData) {
    return {
      title: '청정배관 - 전문 하수구 뚫기 서비스',
      description: '변기막힘 , 하수구 막힘 , 하수구 뚫기 ,확실하고 깨끗한 하수구 뚫기, 배관 청소 전문 서비스.',
    };
  }

  return {
    title: regionData.title,
    description: regionData.description,
  };
}

export default async function Home({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const regionData = regions[region];

  if (!regionData) {
    return notFound();
  }

  return (
    <main>
      <Header />
      <Hero regionData={regionData} />
      <Services />
      <About />
      <Contact />
      <Footer regionData={regionData} />
    </main>
  );
}
