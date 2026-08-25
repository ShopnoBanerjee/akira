import Splash from './sections/Splash';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Flavours from './sections/Flavours';
import Story from './sections/Story';
import Menu from './sections/Menu';
import Community from './sections/Community';
import Partner from './sections/Partner';
import Visit from './sections/Visit';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <Splash />
      <Nav />
      <main>
        <Hero />
        <Flavours />
        <Story />
        <Menu />
        <Community />
        <Partner />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
