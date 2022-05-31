import { Component } from "react";

class RegularComp extends Component {
  render() { 
    console.log("Reqular Component RENDER")
    const {name} = this.props
    return (
      <>
        Reqular {name}
      </>
    );
  }
}
 
export default RegularComp;