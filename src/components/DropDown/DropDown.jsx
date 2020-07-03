import React, { Component } from 'react';
import styles from "./DropDown.module.scss"



class DropDown extends Component {

  getOptions = () => {
    return this.props.filterOptions.map((item, index) => {
      return <option value={item} key={index}>{item}</option>
    })
  }

  state = {  }
  render() { 
    return ( 

      <select className={styles.DropDown} name="" id="">
       {this.getOptions()}
      </select>



     );
  }
}
 
export default DropDown;