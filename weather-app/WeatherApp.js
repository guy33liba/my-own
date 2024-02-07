import React, { useEffect, useState } from "react"
import "./WeatherApp.css"
import axios from "axios"
const WeatherApp = () => {
  const [input, setInput] = useState("")
  const [temperture, setTemperture] = useState("")
  const [city, setCity] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`

  const fetchAPI = async () => {
    await axios.get(url).then((res) => console.log(res))
  }
  useEffect(() => {
    fetchAPI()
  }, [])
  const submit = () => {
    setCity(input)
  }
  return (
    <div>
      <div>
        <div className="container">
          <img src="background.jpg" alt="" className="background" />
          <input type="text" className="city-input" value={input} onChange={(e) => setInput(e.target.value)} />

          <div className="weather-container">
            <div className="sun-status">
              <img src="sun.png" />
            </div>

            <div className="weather-content">
              today
              {city ? <div className="city">{city}</div> : <div>city Name</div>}
              <div className="temperture">{temperture} °C</div>
              <div className="sky-state">clear sky</div>
              <div>
                <button className="submit-button" onClick={() => submit()}>
                  Submit Weather
                </button>
              </div>
            </div>
            <div className="days-container">
              <div className="days">
                <div className="days-content">
                  WednesDay
                  <div>
                    <img src="sun.png" alt="" className="days-image" />
                  </div>
                  <div>17 °C</div>
                </div>
              </div>

              <div className="days">
                <div className="days-content">
                  ThursDay
                  <div>
                    <img src="cloud.png" alt="" className="days-image" />
                  </div>
                  <div>17 °C</div>
                </div>
              </div>

              <div className="days">
                <div className="days-content">
                  FriDay
                  <div>
                    <img src="sun.png" alt="" className="days-image" />
                    <div>17 °C</div>
                  </div>
                </div>
              </div>

              <div className="days">
                <div className="days-content">
                  SaturDay
                  <div>
                    <img src="cloud.png" alt="" className="days-image" />
                    <div>17 °C</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
