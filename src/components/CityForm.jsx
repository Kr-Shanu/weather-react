import { Form, Button } from 'react-bootstrap'


function CityForm(props) {


    return (
        <div className="App">
            <header className="App-header">
                <h1><img width='80px' alt='weatherLogo' src='https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_29-1024.png'></img>Weather Application</h1>
                <br></br>
                <br></br>
                <br></br>
                <div id='cityName'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>City Name</Form.Label>
                            <Form.Control autoFocus onChange={props.handleChange} type="text" required placeholder="Enter city name." />
                            <Form.Text className="text-muted">
                                Enter the city whose weather you want to know.
                            </Form.Text>
                        </Form.Group>
                        <Button onClick={props.handleSubmit} variant="info" type="submit">
                            Fetch Weather
                        </Button>
                    </Form>
                </div>
            </header>
        </div>
    );
}

export default CityForm;