import './App.css';
import React, { useState } from 'react'
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled.", "success");
      // document.title ="TextUtils - Dark Mode"
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
      // document.title ="TextUtils - Light Mode"
    }
  }
  return (
    <>
    {/* <Router>  */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>  */}
          {/* <Route  */}
            {/* exact path="/"  */}
            {/* element={ */}
              <TextForm showAlert={showAlert} heading="Enter the text to be analyzed below" mode={mode} />
              {/* // }/>   */}
          {/* // <Route exact path="/about" element={<About mode={mode}/>} /> */}
        {/* </Routes>  */}
      </div>
    {/* </Router>  */}
    </>
  );
}

export default App;
