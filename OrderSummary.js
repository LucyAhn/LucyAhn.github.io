import React from 'react';


const OrderSummary = React.createClass({
  getInitialState () {
    return {
    };
  },
  render () {
    return (
      <div>      
        pizzas:{this.props.pizzas} <button onClick={this.props.resetPizzas}> reset </button> <br />
        wings:{this.props.wings} <button onClick={this.props.resetWings}> reset </button> <br />
        pop:{this.props.pop} <button onClick={this.props.resetPop}> reset </button> 
      </div>
    );
  }
});


export default OrderSummary;
