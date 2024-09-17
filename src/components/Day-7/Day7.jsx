import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
let APIKEY = "2a61f9a45f7f22fdc579e5c8ff3651ac";

function Day7() {
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState(null);
  const [isRunning, setIsrunning] = useState(false);

  const { register } = useForm();
  useEffect(() => {
    async function fetchWeather(params) {
      if (inputCity) {
        let data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${APIKEY}&units=metric`
        );
        let res = await data.json();
        console.log(res);
        setData(res);
      }
    }
    fetchWeather();
  }, [inputCity]);
  const name = data?.name || "N/A";
  const country = data?.sys?.country || "N/A";
  const sunset = data?.sys?.sunset
    ? new Date(data.sys.sunset * 1000).toLocaleTimeString()
    : "N/A";
  const sunrise = data?.sys?.sunrise
    ? new Date(data.sys.sunrise * 1000).toLocaleTimeString()
    : "N/A";
  const description = data?.weather?.[0]?.description || "N/A";
  function handleSubmit(e) {
    e.preventDefault();
    setIsrunning(!isRunning);
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          style={{ border: "2px solid green" }}
          type="text"
          value={inputCity}
          {...register("city")}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Search</button>
      </form>
      {isRunning ? (
        <div>
          <p>City: {name}</p>
          <p>country: {country}</p>
          <p>Sunset: {sunset}</p>
          <p>Sunrise: {sunrise}</p>
          <p>Description: {description}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Day7;
