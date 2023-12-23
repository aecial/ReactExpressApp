import { useState, useEffect } from "react";
function App() {
  const [backEndData, setBackEndData] = useState([{}]);
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((data) => setBackEndData(data));
  }, []);
  return (
    <div>
      {typeof backEndData === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backEndData.map((item) => <p key={item.id}>{item.name}</p>)
      )}
    </div>
  );
}

export default App;
