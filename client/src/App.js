import { RouterProvider } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { Toaster } from "react-hot-toast";
import { router } from "./router/root";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
