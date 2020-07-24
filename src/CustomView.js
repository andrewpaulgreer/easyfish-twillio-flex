import React from 'react';
import Iframe from 'react-iframe';

export default class CustomView extends React.Component {
    render() {
        return(
           <Iframe url="https://andrewpaulgreer.github.io/jQuery-Day-Planner/"
           width="1000"
           height="100%"
           allowFullScreen />
        )
    }
}