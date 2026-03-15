import Logo from "./components/base/Logo";
import Feature from "./components/sections/Feature";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Contact from "./components/sections/Contact";
import Container from "./components/base/Container";

function App() {
  return (
    <>
      <header>
        <Container>
          <Logo />
          <Hero />
        </Container>
      </header>
      <main>
        <Container>
          <Feature />
          <Pricing />
        </Container>
      </main>
      <footer>
        <Container>
          <Contact />
        </Container>
      </footer>
    </>
  );
}

export default App;
