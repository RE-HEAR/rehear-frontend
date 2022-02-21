import React, {Component} from 'react';
import "./dropdown.scss";

class Dropdown extends Component {
    constructor(props){
      super(props)
      this.state = {
        selectedValue: ""
      }
    }
    render() {
      const handleChange = (e) => {
        this.setState({selectedValue: e.target.value})
      }
      return (
      <div class="drop-box">
      <select onChange={(e) => handleChange(e)}>
        <option value="" selected>선택해주세요</option>
        {this.props.options.map(arrayItem => <option class="menu" value={arrayItem}>{arrayItem}</option>)}
      </select>
      {/* <h1>{this.state.selectedValue}</h1> */}
      </div>
      );
    }
  }
  Dropdown.defaultProps = {
    options: ["1-10", "10-15", "15-20", "20+"]
  }


export default Dropdown;
