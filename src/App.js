import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  let content = useRoutes(routes);

  return <div className="App">{content}</div>;
}

export default App;
