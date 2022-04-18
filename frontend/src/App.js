import { useState, useEffect } from "react";
import "./App.css";

import { profile } from "./lib/auth";

import Auth from "./Auth";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      const result = await profile();
      setUser(result);
    }
    getUser();
  }, [setUser]);

  return (
    <div>
      {user ? (
        <div>
          <h1>Hello guy</h1>
        </div>
      ) : (
        <Auth setUser={setUser} />
      )}
    </div>
  );
}

export default App;
