import React, { useEffect, useState } from "react"
import "./WeatherApp.css"
import axios from "axios"
const WeatherApp = () => {
  const [data, setdata] = useState([])
  const [temperture, setTemperture] = useState([])
  const [city, setCity] = useState([])
  const [desc, setdesc] = useState([])
  const key = "0319aa6547fb86bd61c95c4d0afe1e0a"
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`
  const fetchAPI = () => {
    axios.get(url).then((response) => {
      setdata(response.data)
    })
    setCity(data.name)
    setdesc(data)
    console.log(data)
  }
  useEffect(() => {
    fetchAPI()
  }, [])
  const submit = () => {
    setCity(data.name)
  }
  return (
    <div>
      <div>
        <div className="container">
          <img src="background.jpg" alt="" className="background" />
          <data type="text" className="city-data" value={data} onChange={(e) => setdata(e.target.value)} />

          <div className="weather-container">
            <div className="sun-status">
              <img src="sun.png" />
            </div>

            <div className="weather-content">
              today
              {city ? <div className="city">{city}</div> : <div>city Name</div>}
              <div className="temperture">{temperture} °F</div>
              <div className="sky-state"> fefe{desc}</div>
              <div>
                <button className="submit-button" onClick={() => submit()}>
                  Submit Weather {city}
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
                  <div>{temperture}</div>
                </div>
              </div>

              <div className="days">
                <div className="days-content">
                  ThursDay
                  <div>
                    <img src="cloud.png" alt="" className="days-image" />
                  </div>
                  <div>{temperture} </div>
                </div>
              </div>

              <div className="days">
                <div className="days-content">
                  FriDay
                  <div>
                    <img src="sun.png" alt="" className="days-image" />
                    <div>{temperture}</div>
                  </div>
                </div>
              </div>

              <div className="days">
                <div className="days-content">
                  SaturDay
                  <div>
                    <img src="cloud.png" alt="" className="days-image" />
                    <div>{temperture}</div>
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
