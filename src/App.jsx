import { RouterProvider } from "react-router-dom";
import router from "./router/routes"; // Import the router

function App() {
    return <RouterProvider router={router} />;
}

export default App;
