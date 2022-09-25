import React, {useState, useEffect} from 'react';


const Time = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
        const myInterval = setInterval(() => {
            setTime(new Date());
        }); 
        return () => clearInterval(myInterval);
  })
  return (
    <>{time.toLocaleTimeString()}</>
  )
}

export default Time