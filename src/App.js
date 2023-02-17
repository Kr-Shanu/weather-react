import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import CityForm from './components/CityForm';
import Information from './components/Information';
import axios from 'axios';
import FailurePage from './components/FailurePage';



function App() {

  const [city, setCity] = useState("");
  const [submit, setSubmit] = useState(false);
  const[wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");
  const [tempc, setTempc] = useState(0);
  const [tempf, setTempf] = useState(0);
  const [time, setTime] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    console.log("The new city name = " + city);
  }, [city, submit]);

  useEffect(() => {
    console.log("The new value of submit = " + submit);

    if (submit === true) {

      let link = 'http://api.weatherapi.com/v1/current.json?q='+city;

      var config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: link,
        headers: { 
          'key': '3e8ae4d26ab640d596e134743231602'
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        let weather = response.data.current;
        let new_wind = weather.wind_kph;
        let n_humidity = weather.humidity;
        let condition = weather.condition.text;
        let ic = weather.condition.icon;
        let temp_c = weather.temp_c;
        let temp_f = weather.temp_f;
        let n_time = response.data.location.localtime;
        setIcon(ic);

        setWind(new_wind);
        setHumidity(n_humidity);
        setCondition(condition);
        setTempc(temp_c);
        setTempf(temp_f);
        setTime(n_time.slice(-4));

        navigate('/info');
      })
      .catch(function (error) {
        console.log(error);
        navigate('/fail');
      });
      
    }
  }, [submit]);


  useEffect(()=> {
    console.log("Values changed");
  },[wind, humidity, condition, icon, tempc, tempf, time])

  function handleChange(e) {
    let c_name = e.target.value;
    let first = c_name.charAt(0);
    c_name = first.toUpperCase() + c_name.substring(1);
    console.log(c_name);
    setCity(c_name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (submit === false)
      setSubmit(true);
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route element={<CityForm handleChange={handleChange} handleSubmit={handleSubmit} />} path='/'></Route>
          <Route 
            element={
                <Information 
                  city={city}
                  wind={wind}
                  humidity={humidity}
                  condition={condition}
                  celcius={tempc}
                  fahrenheit={tempf}
                  time={time}
                  />
              } 
            path='/info'></Route>
            <Route element={<FailurePage/>} path='/fail'></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;