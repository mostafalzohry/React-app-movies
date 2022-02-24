import React from "react";
import "./header.css";
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="container-fluid cont-fl2 ">
                    <div className="row">
                        <div className="col-md-5 colm5 py-5">
                            <h1>Mostafa</h1>
                            <p className="headp2">Web Developer &amp; Designer</p>
                            <Button variant="outline-info">CONTACT ME</Button>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HeaderComponent;
