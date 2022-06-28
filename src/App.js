import "./styles.css";
import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Welcome!</h1>
      {loggedIn ? <h2>Please log in</h2> : <h2>Hello Jearld</h2>}
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Login" : "Log Out"}
      </button>
    </div>
  );
}
