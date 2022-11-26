import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/route";
import "react-tabs/style/react-tabs.css";

function App() {
  return (
    <div className="max-w-[1440px] lg:px-24">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
