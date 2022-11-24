import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/route";

function App() {
  return (
    <div className="max-w-[1440px] px-24">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
