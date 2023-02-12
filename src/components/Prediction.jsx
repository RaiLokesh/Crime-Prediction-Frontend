import React, { useEffect } from 'react'
import DateTimePicker from 'react-datetime-picker';
import { MdOnlinePrediction, MdOutlineIntegrationInstructions } from 'react-icons/md'
import { CgShapeCircle } from 'react-icons/cg'
import Chart from './Chart';

const Prediction = ({ allDayPredictions, date, onDateChange, predictResult, prediction, resetAll }) => {
  useEffect(() => {
    console.log("Date:", date, "DateType:", typeof (date))
  }, [date])
  return (
    <div className='predDivMain'>
      <div className='predDivCard'>
        <div className='predDiv0'>
          <MdOnlinePrediction style={{ marginRight: "5%", cursor: "pointer" }} />
          <MdOutlineIntegrationInstructions style={{ marginLeft: "5%", cursor: "pointer" }} />
        </div>
        <div className='predDivInt'>
          <div style={{ margin: "2%", overflow: "scroll", height: "100%" }}>

            <div className='predDivInt1' >
              <div>
                <p style={{ textAlign: "left", color: "greenyellow" }}>Select Date and Time :</p>
              </div>

              <DateTimePicker
                onChange={onDateChange}
                value={date}
                background="#ffffff"
              />
              <div style={{ paddingTop: "10%" }}>
                <button onClick={() => predictResult()}>Predict</button>
              </div>


            </div>
            {
              prediction &&
            <div className='predDivInt2'>
              <p style={{ textAlign: "left", color:"greenyellow" }}>Prediction Result :</p>
              <p style={{ textAlign: "left", fontSize:"11pt" }}>The crime rate in the selected neighbourhood for the selected date and time is <span style={{color:"orange"}}>{prediction}</span>.</p>
              <p style={{ textAlign: "left", color:"greenyellow" }}>Distribution of crime rate throughout the selected date :</p>
              <Chart allDayPredictions={allDayPredictions} />
            </div>
            }
          </div>
        </div>
        <div className='predDiv0'>
          <CgShapeCircle onClick={() => resetAll()} style={{ marginBottom: "5%", cursor: "pointer" }} />
        </div>
      </div>

    </div>
  )
}

export default Prediction