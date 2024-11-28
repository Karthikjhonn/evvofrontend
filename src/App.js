import logo from "./logo.svg";
import "./App.css";

import MainRouter from "./router/MainRouter";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );

export default App;
