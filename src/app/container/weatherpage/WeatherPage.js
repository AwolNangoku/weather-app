import React, { Component } from 'react';

const Weather = props => {
    const {weather, main} = props.weatherData;
    return(
    <div>
        {weather[0].description}
        {<br/>}
        {`Temperature>>>>>>>${main.temp}`}
    </div>
    );
}

class WeatherPage extends Component {
    constructor(props) {
        super(props);
        this.state = { cityName: '', weatherData: undefined }
    }

    getCityWeather(cityName = '') {
        const url = `http://api.openweathermap.org/data/2.5/weather` + `?q=${cityName}&APPID=KKKKKKKK`;
        fetch(url)
        .then(response => response.json())
        .then(json => this.setState({ weatherData: json}))
        .catch(err => console.error(err))
    }

    componentDidUpdate() {
        console.log(this.state.cityName)
    }

    cityName = ( event ) => this.setState({ cityName: event.target.value })

    render() {
        return(
            <div>
                <h1>Lookup the weather of your city, enter the name of the city below</h1>
                <div className="search-form">
                    <form onSubmit={ event => event.preventDefault()}>
                        <div className="form-field">
                            <input type="text" id="search" name="search" placeholder="Enter city name" onChange={ this.cityName }/>
                        </div>
                        <div className="form-field">
                            <input type="button" value="Search Weather" onClick={() => this.getCityWeather(this.state.cityName)}/>
                        </div>
                    </form>
                </div>
                {this.state.weatherData ? <Weather weatherData={this.state.weatherData} /> : null}
            </div>
        );
    }
}

export default WeatherPage;