import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Carousel from './components/carousel/carousel';

function App() {
  return (
    <>
      <div className='App'>
        <Header/>
        <Banner/>
        <Carousel/>
      </div>
    </>
  );
}

export default App;
