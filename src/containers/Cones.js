import React, { Component } from 'react';

class Cones extends Component {
  constructor(props){
    super(props);
    this.state ={
      size: "large",
      flavor: "mint",
      img_url: "https://static01.nyt.com/images/2013/06/02/magazine/02wmt/02wmt-blog427-v3.jpg",
      cone_number: 1
    }
    this.handle_flavor=this.handle_flavor.bind(this)
  }

  handle_flavor(event){
    if (this.state.cone_number === 1){
      this.setState({
        size: "small",
        flavor: "vanilla",
        img_url: "http://cdn-image.myrecipes.com/sites/default/files/ginger-peach-ice-cream-cones-ck.jpg",
        cone_number: 2
      })
    } else {
      this.setState({
        size: "large",
        flavor: "mint",
        img_url: "https://static01.nyt.com/images/2013/06/02/magazine/02wmt/02wmt-blog427-v3.jpg",
        cone_number: 1
      })
    }
  }
  render() {
    return(
      <div onClick={this.handle_flavor}>
        <h1> Ice cream cones! </h1>
        <h3>{this.state.size} {this.state.flavor} cone</h3>
        <img src={this.state.img_url} width="20%" height="20%"/>
      </div>
    )
  }
}

export default Cones;
