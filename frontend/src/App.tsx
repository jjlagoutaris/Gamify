import React from "react";
import "./App.scss";
// import { images } from "./constants";
// import { Container } from "react-bootstrap";
import { Footer } from "./components";
import { TaskCategory } from "./containers";

function App() {
  return (
    <>
      <TaskCategory />
      <Footer />
    </>
  );
}

export default App;
