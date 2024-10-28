import Header from './components/header'
import Content from './components/content'
import Footer from "./components/footer";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Comment from "./components/coment";
import { ToastContainer } from 'react-toastify';
import { TimelineDemo } from './components/TimelineDemo';

const App = () => {
  return (
    <>
      <Header />
      <Content />
      {/* <Experience /> */}
      <TimelineDemo />
      <Projects />
      <Comment />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
