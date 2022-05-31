import { PureComponent } from "react";

class PureComp extends PureComponent {
  state = {  }
  render() { 
    console.log("Pure Component RENDER")
    const {name} = this.props
    return ( 
      <>
        Pure {name}
      </>
     );
  }
}
 
export default PureComp;