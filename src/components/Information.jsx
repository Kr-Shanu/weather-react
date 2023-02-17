import React from "react";
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

function Information(props) {

    const navigate = useNavigate();

    function handleClick(e) {
        navigate('/');
    }

    let wind = props.wind;
    let humidity = props.humidity;
    let temp_c = props.celcius;
    let temp_f = props.fahrenheit;
    let city = props.city;
    let condition = props.condition;


    return (
        <div>
            <h1>Weather Report</h1>
            <br></br>
            <Container fluid>
                <img
                    width='80px'
                    alt="place"
                    src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-1024.png">
                </img>
                <br></br>
                <h2>{city} {props.time}</h2>
                <br></br>
                <div className="info">
                    <h3><img width='64px' alt="temp" src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_43-1024.png"></img> Temperature : {temp_c} °C / {temp_f} °F</h3>
                    <h3><img width='64px' alt="wind" src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Wind-Wheel-1024.png"></img> Wind Speed : {wind} Km/Hr</h3>
                    <h3><img width='64px' alt="humidity" src="https://cdn3.iconfinder.com/data/icons/weather-forecast-flat-2/2010/Flat-26-1024.png"></img> Humidity Lev : {humidity} % </h3>
                    <p>Overall condition: {condition}</p>
                </div>
                <br></br>
                <Button onClick={handleClick} variant="info">Home</Button>
            </Container>
        </div>
    );
}

export default Information;