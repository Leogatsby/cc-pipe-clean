import Header from '@/components/1.Header/Header';
import Hero from '@/components/2.Hero/Hero';
import Services from '@/components/3.Services/Services';
import About from '@/components/4.About/About';
import Contact from '@/components/5.Contact/Contact';
import Footer from '@/components/6.Footer/Footer';
import './page.scss';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
