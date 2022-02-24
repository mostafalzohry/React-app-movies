import React from "react";

class ProgressComponent extends React.Component {
  constructor() {
    super();
  }
  skills = [
    { Name: "HTML", Digree: "90%" },
    { Name: "CSS", Digree: "80%" },
    { Name: "JS", Digree: "80%" },
    { Name: "Angular", Digree: "60%" },
   
  ];
  render() {
    return (
      <>
        {this.skills.map((item) => {
          return (
            <div style={{height:"2rem"}}   class="progress m-3">
              <div
                class="progress-bar  bg-success "
                role="progressbar"
                style={{width:item.Digree}}>
             
                {item.Name}
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default ProgressComponent;