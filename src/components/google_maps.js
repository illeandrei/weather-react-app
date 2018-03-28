import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        // this is the best practice for rendering third party components that
        // don't know how to play well with react (non-react components)
        // google.maps.Map(htmlNode, config)
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        // setting 'ref=map' on html element -> you get a direct reference inside this
        // component, through 'this.ref.map'
        return <div ref="map" />
    }
}

export default GoogleMap;