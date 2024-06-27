import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState ('light');

  const [btnText,newbtnText] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    },1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background='black';
      document.body.style.color='white';
      newbtnText("Enable Light Mode");
      showAlert("Dark Mode has Been Enable", "success");
      setInterval(() => {
        document.title = 'SIT - Admmision';
      }, 2000);
      setInterval(() => {
        document.title = 'B.sc IT';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.background='white';
      document.body.style.color='black';
      newbtnText("Enable Dark Mode");
      showAlert("Light Mode has Been Enable", "success");
    }
  }

  return (
    <>
      <Navbar title="GIT" mode={mode} toggleMode={toggleMode} btntext={btnText}/>
      <Alert alert={alert}/>
      <TextForm heading = "Enter your Text Here" toggleMode={toggleMode} mode={mode} showAlert={showAlert} />
    </>
  );
}
export default App;
