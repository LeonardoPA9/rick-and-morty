import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CharacterProvider from "./context/CharacterContext";
import Layout from "./pages/Layout";

function App() {
  return (
    <CharacterProvider>
      <Navbar />
      <Layout />
    </CharacterProvider>
  );
}

export default App;
