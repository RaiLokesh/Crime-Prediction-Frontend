import './App.css';
import MyMap from './components/MyMap';
import { useEffect, useState } from "react";
import Prediction from './components/Prediction';

function App() {
  const [lat, setLat] = useState(49.2650765)
  const [lon, setLon] = useState(-123.1184743)
  useEffect(() => {
    console.log(lat, lon) //axios call for api
  }, [lat, lon])
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
        <Prediction lat={lat} lon={lon} />
      </div>
    </div>
  );
}

export default App;
