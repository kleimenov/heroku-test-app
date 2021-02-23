import React, { useEffect, useState } from "react";

const App = () => {
  const [serverData, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("/data");
    const data = await response.json();
    setData(data.gaugeData);
  };

  console.log(serverData);

  return (
    <div className="App">
      <div className="container">
        {serverData.map((item) => (
          <li>{item.name}</li>
        ))}
      </div>
    </div>
  );
};

export default App;
