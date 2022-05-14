import "./css/style.css";

import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteController from "./utils/RouteController";
import ContextProviders from "./utils/ContextProviderController";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProviders>
          <Routes>
            <Route // index route
              path="/"
              element={
                <RouteController // these are the default props, you don't need to pass them actually
                  isPrivateRoute={false}
                  includeHeader={true}
                  includeFooter={true}
                >
                  <HomePage />
                </RouteController>
              }
            />
            <Route // example of a private route
              path="/private"
              element={
                <RouteController isPrivateRoute={true} privateRouteRedirect="/">
                  {/* Include your private page component here */}
                </RouteController>
              }
            ></Route>
          </Routes>
        </ContextProviders>
      </BrowserRouter>
    </div>
  );
}

export default App;
