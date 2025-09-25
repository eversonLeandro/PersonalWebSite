import { Header, HomeSection, EducationSection, HobbiesSection, ProjectsSection, Footer, ContactSection } from '../../components/organisms';



const Home = () => (
  <div className="min-h-screen flex flex-col bg-gray-100">
    <Header />
    <main className="flex-1">
      <HomeSection />
      <EducationSection />
      <HobbiesSection />
      <ProjectsSection />
      <ContactSection/>
    </main>
    <Footer />
  </div>
);

export default Home;