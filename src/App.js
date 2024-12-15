import MainRouter from "./router/MainRouter";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
