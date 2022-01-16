import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
/* import Alert from "./Components/Alert";
 */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  /* const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }; */

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils- Dark Mode";
      /*       showalert("Dark mode has been Enabled")
       */
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils- Light Mode";

      /*       showalert("Light mode has been Enabled")
       */
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="AboutUs"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/*       <Alert alert={alert}/>
         */}{" "}
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm
                /* showalert={showalert} */ heading="Enter your text below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
