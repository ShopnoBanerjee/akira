import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import Story from './sections/Story';
import Community from './sections/Community';
import Visit from './sections/Visit';
import Partner from './sections/Partner';
import Footer from './sections/Footer';
import { useRise } from './hooks/useRise';

export default function App() {
  useRise();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Community />
        <Visit />
        <Partner />
      </main>
      <Footer />
    </>
  );
}
