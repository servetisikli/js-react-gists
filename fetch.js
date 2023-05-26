import React, { useEffect, useState } from "react";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("API_URL");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("API request failed", error);
    }
  };

  return (
    <div>
      <h1>API Verileri</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
