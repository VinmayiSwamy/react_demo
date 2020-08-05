import React from 'react';
import data from '../data/data.json';

export default function Resume(props) {
    let info = data.detals[props.location.data1.id]
    console.log(info)
    return (
        <div className="row justify-content-center">
            <div className="col-lg-3 m-2">
                <div className="card">
                    <div className="card-body">
                        <h1>{ info.profile }</h1>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
            <div className="card">
                    <div className="card-body">
                        <h2>Career Objective:</h2>
                        <p>{info.careerObj}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
