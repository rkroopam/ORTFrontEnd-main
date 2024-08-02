import React, { useState } from "react";
import "./App.css";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <AppRoutes />
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
