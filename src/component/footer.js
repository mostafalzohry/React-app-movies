import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css"
class FooterComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div className=" bg-dark text-light py-4">
                    <div className="container-fluid">
                        <div className="row row-flex2">
                            <div className="col-md-4">
                                <h3>GET IN TOUCH</h3>
                                <div>
                                    <span>mostafalzohry@gmail.com</span>
                                    <br />
                                    <span>0123456789</span>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <Button variant="outline-light">CONTACT ME</Button>

                            </div>
                            <div className="col-md-4">
                                <div>  Social Contact  </div>
                                <i className="bi bi-facebook m-3"></i>
                                <i class="bi bi-twitter m-3"></i>
                                <i class="bi bi-instagram m-3"></i>

                                <p>  Copyright &copy; mostafa </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default FooterComponent;
