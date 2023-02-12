import React, { useEffect, useState } from 'react'
import DateTimePicker from 'react-datetime-picker';
import { MdOnlinePrediction, MdOutlineIntegrationInstructions } from 'react-icons/md'
import { CgShapeCircle } from 'react-icons/cg'
import Chart from './Chart';

const Prediction = ({ allDayPredictions, date, onDateChange, predictResult, prediction, resetAll }) => {
  const [isHome, setIsHome] = useState(true)
  useEffect(() => {
    console.log("Date:", date, "DateType:", typeof (date))
  }, [date])
  return (
    <div className='predDivMain'>
      <div className='predDivCard'>
        <div className='predDiv0'>
          <MdOnlinePrediction onClick={() => setIsHome(true)} style={{ marginRight: "5%", cursor: "pointer" }} />
          <MdOutlineIntegrationInstructions onClick={() => setIsHome(false)} style={{ marginLeft: "5%", cursor: "pointer" }} />
        </div>
        <div className='predDivInt'>
          {

            isHome ?
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
                    <p style={{ textAlign: "left", color: "greenyellow" }}>Prediction Result :</p>
                    <p style={{ textAlign: "left", fontSize: "11pt" }}>The crime rate in the selected neighbourhood for the selected date and time is <span style={{ color: "orange" }}>{prediction}</span>.</p>
                    {allDayPredictions &&
                      <>
                        <p style={{ textAlign: "left", color: "greenyellow" }}>Distribution of crime rate throughout the selected date :</p>
                        <Chart allDayPredictions={allDayPredictions} />
                      </>
                    }
                  </div>
                }
              </div>
              :
              <div style={{ margin: "2%", overflow: "scroll", height: "100%", alignItems: "center", color: "aliceblue" }}>
                <div className='predDivInt1_'>
                  <ol >
                    <li style={{ textAlign: "left", padding:"2%" }}>Enter the Date and Time.</li>
                    <li style={{ textAlign: "left", padding:"2%" }}>Click on Predict to check predictions.</li>
                    <li style={{ textAlign: "left", padding:"2%" }}>The Model produces the prediction for your Selected date and time.</li>
                    <li style={{ textAlign: "left", padding:"2%" }}>You can also view the data for all hours in the selected date and compare and check the safest time to visit.</li>
                  </ol>
                </div>
              </div>
          }
        </div>
        <div className='predDiv0'>
          <CgShapeCircle onClick={() => resetAll()} style={{ marginBottom: "5%", cursor: "pointer" }} />
        </div>
      </div>

    </div>
  )
}

export default Prediction