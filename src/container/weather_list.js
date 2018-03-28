import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';

class WeatherList extends Component {
    renderWeather({ city, list }) {
        const temps = list.map(intervals => intervals.main.temp - 273.15),
            pressure = list.map(intervals => intervals.main.pressure),
            humidity = list.map(intervals => intervals.main.humidity);

        return (
            //add unique key prop to the top level element
            <tr key={city.id}>
                <td><GoogleMap lat={city.coord.lat} lon={city.coord.lon} /></td>
                <td><Chart data={temps} style={{fill: "none"}} units="°C" /></td>
                <td><Chart data={pressure} color="orange" units="hPa" /></td>
                <td><Chart data={humidity} style={{fill: "none"}} units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);