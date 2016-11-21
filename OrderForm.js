import React from 'react';

const OrderForm = React.createClass({
  getInitialState () {
    return {
    };
  },
  render () {
    return (
      <div>
        <div>      
          Pizza 
          <button onClick={this.props.addPizza1}> + </button>  
          <button onClick={this.props.removePizza1}> - </button>
        </div>
        <div>      
          wings
          <button onClick={this.props.addWings1}> + </button>  
          <button onClick={this.props.removeWings1}> - </button>
        </div>
        <div>      
          pop
          <button onClick={this.props.addPop1}> + </button>  
          <button onClick={this.props.removePop1}> - </button>
        </div>
      </div>
    );
  }
});


export default OrderForm;
