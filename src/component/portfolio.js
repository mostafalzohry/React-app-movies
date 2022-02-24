import React from "react";
import "./portfolio.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class PortfolioComponent extends React.Component {
  constructor() {
    super();
  }

  cards = [
    "WEB DESIGN",
    "MOBILE DESIGN",
    "web development",
    "WEB APP DEVELOPMENT",
    "MOBILE APP DEVELOP",
    "PWA DEVELOP",
  ];

  render() {
    return (
      <>
       
            <div className="port-cont2">
            <div className="container2">
              <div className="row">
                <h2 className="center2">What i can do ?</h2>
              </div>
  

            <div className="row cards-cont2">
            {this.cards.map((item) => {
      
      return (
                <Card style={{ width: "14rem", height: "11rem" ,margin:"2rem" }} >
                  <Card.Body className="my-4 bg-info">
                    <Card.Title>{item} </Card.Title>
                    <hr />
                  </Card.Body>
                </Card>
                 )
                })}
               
                </div>
          </div>
        </div>
       
      </>
    );
  }
}

export default PortfolioComponent;
