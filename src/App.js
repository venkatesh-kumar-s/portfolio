import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { AppRoutes } from "./routes";
import React, { useState } from "react";
import Loading from "./components/Loading";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://venkateshkumar.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret":
          "du8cuS0SRs6emXzWHZ1hyk2uMMFUl5Ys4tgcv8bgzIqwifUM4lvt9mljhmFIrIp9",
      },
    }),
    cache: new InMemoryCache(),
  });
};

function App() {
  const [client] = useState(createApolloClient());
  return (
    <ApolloProvider client={client}>
      <div className="App bg-info">
        <Router>
          <Nav />
          <React.Suspense fallback={<Loading />}>
            <Routes>
              {AppRoutes?.map((r, i) => (
                <Route key={i} path={r?.path} element={r?.component} />
              ))}
            </Routes>
          </React.Suspense>
        </Router>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
