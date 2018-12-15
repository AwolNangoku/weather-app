import React, { Component } from 'react';

const Weather = props => {
    const {weather} = props;
    return(
        <div>
        {props.weatherData.toString()}
    </div>
    );
}

class WeatherPage extends Component {
    constructor(props) {
        super(props);
        this.state = { cityName: '', weatherData: undefined }
    }

    getCityWeather(cityName = '') {
        const url = `http://api.openweathermap.org/data/2.5/weather` + `?q=${cityName}&APPID=7b1a8c03a91f5666e26dc0fa9e3b519d`;
        fetch(url)
        .then(response => response.json())
        .then(json => this.setState({ weatherData: JSON.stringify(json)}))
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