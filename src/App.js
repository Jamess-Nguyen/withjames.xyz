import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Workexp from './components/workexp/workexp';
import Carousel from './components/carousel/carousel';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
      <div className='App'>
        <Header/>
        <Banner/>
        <Workexp/>
        <Carousel/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
