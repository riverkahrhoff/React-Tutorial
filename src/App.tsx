import { useState } from "react";
import { produce } from "immer";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
