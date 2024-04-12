
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/about';

function App() {
  return (
    <>
<Navbar title = "TextUtils" aboutText="About TextUtils" home="Home"/>
<div className='container'>
{/* <TextForm heading = "Example TextArea"/> */}
<About/>
</div>
  </>
  );
}

export default App;
