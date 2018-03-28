import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

function average(data) {
    let rough = data.reduce((accumulator, sum) => accumulator + sum)/data.length;
    return Math.round(rough);
}

//make this a functional component (rather then a smart component)
//no need for state (nor component state, nor redux state)
export default (props) => {
    return (
        <div>
            <Sparklines height={50} width={100} data={props.data}>
                <SparklinesLine style={props.style} color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}