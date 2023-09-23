import "./App.css";
import { useState } from "react";
import Loader from "./components/loader";
import Auth from "./components/auth";
function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [loadStatus, setLoadStatus] = useState(true);

  return (
    <div className="App">
      {loadStatus ? loginStatus ? <p>HomePage</p> : <Auth /> : <Loader />}
    </div>
  );
}
export default App;
