import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { MapWithAMarkerClusterer } from './MapWithAMarkerClusterer';
import { GOOGLE_DUMMY_DATA } from '../constants';
class GoogleMap extends Component {
    constructor() {
        super();
        document.title = "Google Maps";
    }
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <div style={{ height: '100vh', width: '100%' }}>
                            <MapWithAMarkerClusterer markers={GOOGLE_DUMMY_DATA} />
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}
export default GoogleMap;

