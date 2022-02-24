import React from "react";
import "./Skills.css"
import ProgressComponent from "./Progress";
import { Button, ProgressBar } from "react-bootstrap";

class SkillsComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="container-fluid bg-dark text-light ">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2skills2">Skills</h2>
            </div>
          </div>
          <div className="row rowskill2">
            <div className="col-md-9">
              <p >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                esse nisi amet recusandae labore commodi distinctio magni
                aliquam soluta vitae. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Dolor esse nisi amet recusandae labore commodi
                distinctio magni aliquam soluta vitae.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5">
              <p>MY FOCUS</p>
              <div className="hrskill"><hr /></div>
              <p>Web development</p>
              <p>Responsive Design</p>
              <p>Web Design</p>
              <p>Mobile App Design</p>

            </div>
            <div className="col-md-7">

              <div>   <ProgressComponent /> </div>

            </div>
          </div>

        </div>
      </>
    );
  }
}

export default SkillsComponent;
