import React from "react";
import axios from 'axios';
import { Audio } from 'react-loader-spinner';

export default function Weather(props) {
    
    function handleResponse(response) {
        alert(`weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }
  
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
      
    axios.get(apiUrl).then(handleResponse);

    return (
        <Audio
            height="80"
            width="80"
            radius="9"
            color="pink"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />
        
    );
}