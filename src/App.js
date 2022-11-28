import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/route";
import "react-tabs/style/react-tabs.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-w-[1440px] lg:px-24 mx-auto">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
