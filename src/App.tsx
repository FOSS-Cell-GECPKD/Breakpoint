import Footer from "./components/footer";
import Header from "./components/header";
import Intro from "./components/intro";
import ProjectsPage from "./components/projectsPage";

const ProjectShowcase = () => {
  return (
    <div className="relative">
      <Intro />
      <Header />
      <ProjectsPage />
      <Footer />
    </div>
  );
};

export default ProjectShowcase;
