import './App.css';
import MyMap from './components/MyMap';
import { useEffect, useState } from "react";
import Prediction from './components/Prediction';
import axios from './components/Axios'

function App() {
  const [lat, setLat] = useState(49.26171580311674)
  const [lon, setLon] = useState(-123.11452608833008)
  const [dateVal, onDateChange] = useState(new Date());
  let [day, setDay] = useState(dateVal.getDate())
  let [month, setMonth] = useState(dateVal.getMonth())
  let [year, setYear] = useState(dateVal.getFullYear())
  let [hour, setHour] = useState(dateVal.getHours())
  let [minutes, setMinutes] = useState(dateVal.getMinutes())

  const [prediction, setPrediction] = useState()

  useEffect(()=>{
    day = dateVal.getDate()
    month = dateVal.getMonth()+1
    year = dateVal.getFullYear()
    hour = dateVal.getHours()
    minutes = dateVal.getMinutes()
    setMinutes(minutes);
    setHour(hour);
    setYear(year);
    setMonth(month);
    setDay(day);
    console.log("Date:", day, "Month:", month, "Year:", year, "Hour:", hour, "Minutes:", minutes)
  }, [dateVal])

  const predictResult = (()=>{
    async function getPrediction() {
      await axios.post('/predict')
          .then(res => {
              setPrediction(res.data.value)
          })
          .catch(err => {
              console.log("Error::", err)
          })
    }
    getPrediction()
  })

  return (
    <div className="App">
      <div style={{width:"75%"}}>
        <MyMap
          lat={lat}
          setLat={setLat}
          lon={lon}
          setLon={setLon}
        />
      </div>
      <div>
        <div>
          <Prediction date={dateVal} onDateChange={onDateChange} predictResult={predictResult}/>
        </div>
        <input disabled value = {prediction}/>
      </div>
    </div>
  );
}

export default App;
