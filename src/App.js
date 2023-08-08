import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Somethings went wrong
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

function App() {
  const notify = () => {
    toast("Wow so easy!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 8000,
    });
    toast.success("Wow so easy!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
    toast.info("Wow so easy!", { position: toast.POSITION.TOP_RIGHT });
    toast.warn(<CustomToast />, { position: toast.POSITION.BOTTOM_LEFT });
    toast.error("Wow so easy!", { position: toast.POSITION.BOTTOM_CENTER });
    toast("Wow so easy!", { position: toast.POSITION.BOTTOM_RIGHT });
  };

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
export default App;
