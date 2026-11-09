import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Tasting from './sections/Tasting';
import Menu from './sections/Menu';
import FromBlog from './sections/FromBlog';
import { tastingIsOn } from './content';
import Story from './sections/Story';
import Community from './sections/Community';
import Visit from './sections/Visit';
import Partner from './sections/Partner';
import Footer from './sections/Footer';
import { useRise } from './hooks/useRise';

export default function App() {
  useRise();
  const tasting = tastingIsOn();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        {tasting && <Tasting />}
        <Menu tails={!tasting} />
        <Story />
        <Community />
        <FromBlog />
        <Visit />
        <Partner />
      </main>
      <Footer />
    </>
  );
}
