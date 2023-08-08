import React from "react";
import "./App.css";
import Main from "./Main";
import Info from "./Info";

import Header from "./Header";

function App() {
  const contact = Info.map((item) => {
    return <Main {...item} />;
  });
  return (
    <div>
      <Header />
      <div className="Info">{contact}</div>
    </div>
  );
}

export default App;
