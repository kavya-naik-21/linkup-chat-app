import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router";
import appStore from "./store/AppStore.jsx";
import { Provider } from "react-redux";
import { SockectContextProvider } from "./context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={appStore}>
      <AuthContextProvider>
        <SockectContextProvider>
          <App />
        </SockectContextProvider>
      </AuthContextProvider>
    </Provider>
  </BrowserRouter>
);
