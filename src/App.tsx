import { useEffect, useState } from "react";

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

function App() {
  const [forecast, setForecast] = useState<WeatherForecast[] | null>(null);

  useEffect(() => {
    fetch("https://localhost:7062/weatherforecast")
      .then(res => res.json())
      .then((data: WeatherForecast[]) => setForecast(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 font-sans">
      <h1 className="text-xl font-bold mb-2">Weather Forecast</h1>
      {forecast ? (
        <ul className="space-y-2">
          {forecast.map((item, index) => (
            <li key={index} className="p-2 border rounded">
              <div>{new Date(item.date).toLocaleDateString()}</div>
              <div>{item.temperatureC}°C / {item.temperatureF}°F</div>
              <div>{item.summary}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
