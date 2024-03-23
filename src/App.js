import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TextHome from './components/TextHome';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes,Route} from 'react-router-dom';


function App() {
const [modetext, setmodetext] = useState('Enable Dark Mode')
const [darkMode,setDarkMode] = useState(false)
const [alerttext, setalerttext] = useState("")


 const handlemode = ()=>{
  if(darkMode===false){
    setDarkMode(true)
    document.body.style.backgroundColor='#101133'
    setmodetext('Enable Light Mode')

    setalerttext('Dark Mode Enabled')
    setTimeout(() => {
      setalerttext('')
    }, 1500);
  }
  else if(darkMode===true){
    setDarkMode(false)
    setmodetext('Enable Dark Mode')
    document.body.style.backgroundColor='white'
    setalerttext('Light Mode Enabled')
    setTimeout(() => {
      setalerttext('')
    }, 1500);

  }
 }
 
  return (
    <>
 <BrowserRouter>
    <Navbar mode={darkMode} modetext={modetext} handlemode={handlemode} />
    <Alert text={alerttext}/>
    
      <Routes>
        <Route path='/about' element={<About mode={darkMode}/>}/>
        <Route path='/textutils' element={<TextHome  heading={'Enter your text to Analyze'} mode={darkMode}/>}/>
        <Route path='/' element={<TextHome  heading={'Enter your text to Analyze'}/>}/>
        <Route path='*' element={<h1> Page not found</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
