import { useState } from "react";
import Login from "./components/Login";
import ItemList from "./components/ItemList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <>
      {isLoggedIn ? (
        <ItemList />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;

