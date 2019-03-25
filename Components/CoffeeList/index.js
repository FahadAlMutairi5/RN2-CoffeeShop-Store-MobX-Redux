import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/coffeeActions";
// NativeBase Components
import { List, Content } from "native-base";

// Store

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  
  render() {
    let shops;
    const { coffeeshops } = this.props
    if (coffeeshops) {
      shops = coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}
const mapStateToProps = state => {
  return {
    coffeeshops: state.coffeeReducer.coffeeshops,
  };
};

export default connect(mapStateToProps)(CoffeeList);
