import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timeData, setTimeData] = useState(null);

  useEffect(() => {
    const fetchTimeData = async () => {
      const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Amsterdam');
      const data = await response.json();
      setTimeData(data);
    };
    fetchTimeData();
    const interval = setInterval(() => fetchTimeData(), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {timeData ? (
        <div className="central-area">
          <pre>{JSON.stringify(timeData, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
