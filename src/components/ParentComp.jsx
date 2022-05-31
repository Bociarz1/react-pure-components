import { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
  }
  state={name: "COMPONENT"}
  componentDidMount() {
    setInterval(() => {
      this.setState({name:"COMPONENT"})
    }, 5000) 
  }
  render() { 
    console.log("***Parent Component RENDER***")
    const {name} = this.state
    return ( 
      <>
        Parent Component
        <PureComp name={name}/><br/>
        <RegularComp name={name}/>
      </>
     );
  }
}
 
export default ParentComp;
