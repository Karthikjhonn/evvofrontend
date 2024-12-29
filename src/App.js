import MainRouter from "./router/MainRouter";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { startServer } from "./Api/ApiIndex";

function App() {
  const toStartServer = useCallback(async () => {
    try {
      const res = await startServer();
      if (res.status === 200) {
        console.log("starting Server...");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    localStorage.clear();
    toStartServer()
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
