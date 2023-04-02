import './App.css';
import MyMap from './components/MyMap';
import { useEffect, useState } from "react";
import Prediction from './components/Prediction';
import axios from './components/Axios'
import Login from './components/Auth/Login';
import { ToastContainer } from 'react-toastify';

function App() {
  const [lat, setLat] = useState(49.26171580311674)
  const [lon, setLon] = useState(-123.11452608833008)
  const [dateVal, onDateChange] = useState(new Date());
  let [day, setDay] = useState(dateVal?.getDate())
  let [month, setMonth] = useState(dateVal?.getMonth())
  let [year, setYear] = useState(dateVal?.getFullYear())
  let [hour, setHour] = useState(dateVal?.getHours())
  let [minutes, setMinutes] = useState(dateVal?.getMinutes())

  const [prediction, setPrediction] = useState()
  const [allDayPredictions, setAllDayPredictions] = useState()

  const [userExists, setUserExists] = useState(false)

  useEffect(() => {
    day = dateVal?.getDate()
    month = dateVal?.getMonth() + 1
    year = dateVal?.getFullYear()
    hour = dateVal?.getHours()
    minutes = dateVal?.getMinutes()
    setMinutes(minutes);
    setHour(hour);
    setYear(year);
    setMonth(month);
    setDay(day);
    console.log("Date:", day, "Month:", month, "Year:", year, "Hour:", hour, "Minutes:", minutes)
  }, [dateVal])

  const predictResult = (() => {
    console.log("Latitude:", lat, "Longitude:", lon)
    let json = { "day": day, "month": month, "year": year, "hour": hour, "minutes": minutes, "latitude": lat, "longitude": lon }
    async function getPrediction() {
      await axios.post('predict/', json)
        .then(res => {
          setPrediction(res.data)
        })
        .catch(err => {
          console.log("Error::", err)
        })
      await axios.post('allDayPredictions/', json)
        .then(res => {
          setAllDayPredictions(res.data)
        })
        .catch(err => {
          console.log("Error::", err)
        })
    }
    getPrediction()
  })

  const resetAll = (() => {
    setLat(49.26171580311674)
    setLon(-123.11452608833008)
    onDateChange(new Date())
    setPrediction(null)
  })
  useEffect(() => {
    if (sessionStorage.getItem('username') === null) {
      setUserExists(false)
    } else {
      setUserExists(true)
    }
  }, [userExists])
  return (


    <div className="App">
      {
        userExists ? <>
          <div style={{ width: "75vw" }}>
            <MyMap
              lat={lat}
              setLat={setLat}
              lon={lon}
              setLon={setLon}
            />
          </div>
          <Prediction setUserExists={setUserExists} allDayPredictions={allDayPredictions} date={dateVal} onDateChange={onDateChange} predictResult={predictResult} prediction={prediction} resetAll={resetAll} />
        </>
          :
          <Login setUserExists={setUserExists} />
      }

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
