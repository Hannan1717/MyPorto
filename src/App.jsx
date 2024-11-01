import Header from './components/header'
import Content from './components/content'
import Footer from "./components/footer";
import Projects from "./components/projects";
import Comment from "./components/coment";
import { ToastContainer } from 'react-toastify';
import { TimelineDemo } from './components/TimelineDemo';
import { LampDemo } from './components/ui/lamp';

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <TimelineDemo />
      <Projects />
      <LampDemo />
      <Comment />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
