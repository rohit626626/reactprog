// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router,  Route, Switch} from "react-router-dom";

function App() {
const [mode, setMode] = useState("light");

const [alert, setAlert] = useState(null);

const showAlert=(message, type)=>{
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
}

// const removeBodyClasses=()=>{
  // document.body.classList.remove('bg-light')
  // document.body.classList.remove('bg-dark')
  // document.body.classList.remove('bg-warning')
  // document.body.classList.remove('bg-success')
  // document.body.classList.remove('bg-danger')
// }
    const toggleMode = () => {
  // const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enable", "success")
    } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enable", "success")
    }
  };
  return (
    <>
    <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
      <div className="container my-3">
        <Switch>
      <Route exact path="/about">
      <About mode={mode} />
      </Route>
      <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Word counter, Character counter, Lower Case to Upper Case" mode={mode} />
        </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
