import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <ToastContainer theme="dark"/>
    </>
  );
}

export default App;
