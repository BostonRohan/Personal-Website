import Landing from "../views/landing";
import Projects from "../views/projects";
import Archives from "../views/archives";
import Contact from "../views/contact";
import Footer from "../views/footer";

function Index() {
  return (
    <main>
      <Landing />
      <Projects />
      <Archives />
      <Contact />
      <Footer />
    </main>
  );
}
export default Index;
