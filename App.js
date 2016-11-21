import React from 'react';
import OrderForm from './OrderForm';
import OrderSummary from './OrderSummary';

const App = React.createClass({
  getInitialState () {
    return {
      pizzas:0,
      wings:0,
      pop:0
    };
  },
  addPizza: function () {
    this.setState({
      pizzas:this.state.pizzas + 1,
    });
  },
  addWings: function () {
    this.setState({
      wings:this.state.wings + 1,
    });
  },
  addPop: function () {
    this.setState({
      pop:this.state.pop + 1,
    });
  },
  removePizza: function () {
    this.setState({
      pizzas:this.state.pizzas - 1,
    });
  },
  removeWings: function () {
    this.setState({
      wings:this.state.wings - 1,
    });
  },
  removePop: function () {
    this.setState({
      pop:this.state.pop - 1,
    });
  },

  resetPizzas: function () {
    this.setState({
      pizzas:0,
    });
  },
  resetWings: function () {
    this.setState({
      wings:0,
    });
  },
  resetPop: function () {
    this.setState({
      pop:0,
    });
  },

  render () {
    return (
      <div>      
        <OrderForm 
          addPizza1={this.addPizza}
          addWings1={this.addWings}
          addPop1={this.addPop}   
          removePizza1={this.removePizza}
          removeWings1={this.removeWings}
          removePop1={this.removePop}         
        />


        <OrderSummary 
          pizzas={this.state.pizzas} 
          wings={this.state.wings} 
          pop={this.state.pop}

          resetPizzas={this.resetPizzas}
          resetWings={this.resetWings}
          resetPop={this.resetPop}
         />


      </div>
    );
  }
});


export default App;
