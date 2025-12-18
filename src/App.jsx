import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer"

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      <Footer/>
      <ToastContainer position="top-right" autoClose={3000} />

    </Provider>
    
  );
}
