import React from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";

class AboutComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="about ">
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-md-5">
                                <h2 className="h2about2">About me</h2>
                            </div>
                            <div className="col-md-7">
                                <p className="about-p2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Dolor esse nisi amet recusandae labore commodi distinctio
                                    magni aliquam soluta vitae. Lorem, ipsum dolor sit amet
                                    consectetur adipisicing elit. Dolor esse nisi amet recusandae
                                    labore commodi distinctio magni aliquam soluta vitae.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutComponent;
