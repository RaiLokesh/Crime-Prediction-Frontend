import React, {useEffect} from 'react'
import DateTimePicker from 'react-datetime-picker';

const Prediction = ({date, onDateChange, predictResult}) => {
  useEffect(()=>{
    console.log("Date:", date, "DateType:", typeof(date))
  }, [date])
  return (
    <div style={{display:"flex"}}>
        <DateTimePicker onChange={onDateChange} value={date} />
        <button onClick={()=>predictResult()}>Predict</button>
    </div>
  )
}

export default Prediction