import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Carousel from './components/carousel/carousel';
import Workexp from './components/workexp/workexp';

function App() {
  return (
    <>
      <div className='App'>
        <Header/>
        <Banner/>
        <Workexp/>
        <Carousel/>
      </div>
    </>
  );
}

export default App;
