import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { useNavigate } from "react-router-dom";

function FailurePage() {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <div>
            <Container>
                <h1><img width='80px' alt="fail" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678080-shield-error-1024.png"></img>Page Failure</h1>
                <p>
                    The page you are trying to reach is not possible
                    please try again. Sorry for the inconvinience.
                </p>
                <Button variant="info" onClick={handleClick}>Home</Button>
            </Container>
        </div>
    );
}

export default FailurePage;