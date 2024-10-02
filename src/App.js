import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";


function App ()
{
  return (
    <div >
      <h1>Hello World!</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
