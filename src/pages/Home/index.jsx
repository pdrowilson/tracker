import { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Gaming Tracker</h1>
    </div>
  );
}

export default App;
