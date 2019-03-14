import React, { Component } from "react";

class BeyCard extends React.Component {
  render() {
    let bey = {
      name: this.props.name,
      img: this.props.img,
      faveFunc: this.props.faveFunc,
      favorite: this.props.favorite
    }
    return (
      <div>
        <h3>{bey.name}</h3>
        <img id={this.props.id} src={bey.img} onClick={()=> bey.faveFunc(this.props.id, bey.favorite)}/>
      </div>
    );
  }
}

export default BeyCard;
