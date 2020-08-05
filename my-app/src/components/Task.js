import React from 'react'
import { findByLabelText } from '@testing-library/react'

export default function Task() {
    return (
        <div className="row justify-content-center">

            <div className="col-lg-5 m-2">
                <div className="card">
                    <div className="card-body">


                        <div className="row justify-content-center">
                            <div className="col-lg-3 m-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h1>A</h1>
                                        <a href={""}><h5>AA</h5></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 m-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h1>B</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 m-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h1>C</h1>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row justify-content-center">
                            <div className="col-lg-3 m-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h1>A</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 m-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h1>B</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 m-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h1>C</h1>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row justify-content-center">
                            <div className="col-lg-3 m-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h1>A</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 m-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h1>B</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 m-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h1>C</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-lg-5 m-2">
                <div className="card">
                    <div className="card-body">
                        <h1>A</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
