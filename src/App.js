import './App.css';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header';

function App() {
  // style={{ backgroundImage: `url(${backgroundImageSvg})` , backgroundRepeat: 'no-repeat', backgroundPosition: 'right'}}
  return (
    <div className=' backgroundBody min-h-screen' >
       <Header/>
       <Form/>
       <Footer/>
    </div>
  );
}

export default App;
