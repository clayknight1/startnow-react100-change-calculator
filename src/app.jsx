import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
                amountDue: 0,
                amountReceived: 0,
                total: 0,
                twenties: 0,
                tens: 0,
                fives: 0,
                ones: 0,
                quarters: 0,
                dimes: 0,
                nickels: 0,
                pennies: 0
              
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

handleSubmit(event) {
    const total = this.state.amountDue;
    const paid = this.state.amountReceived; 
    const amountToChange = (paid - total).toFixed(2);
    const twentyAmount = Math.floor(amountToChange /20);
    const tenAmount = Math.floor((amountToChange % 20) / 10);
    const fiveAmount = Math.floor(((amountToChange - ((twentyAmount * 20) + (tenAmount * 10))) / 5));
    const dollarAmount = Math.floor(((amountToChange - ((twentyAmount * 20) + (tenAmount * 10) + (fiveAmount * 5))) / 1));
    const decimalAmount = (amountToChange % 1).toFixed(2);
    const quarterAmount = Math.floor(decimalAmount / .25);
    const dimeAmount = Math.floor((decimalAmount - (quarterAmount *  .25)) / .10);
    const nickelAmount = Math.floor((decimalAmount - ((quarterAmount * .25) + (dimeAmount * .1))) / .05);
    const pennyAmount = Math.round((decimalAmount - ((quarterAmount * .25) + (dimeAmount * .1) + (nickelAmount * .05))) /.01);

    this.setState({
      twenties: twentyAmount,
      tens: tenAmount,
      fives: fiveAmount,
      ones: dollarAmount,
      quarters: quarterAmount,
      dimes: dimeAmount,
      nickels: nickelAmount,
      pennies: pennyAmount,
      total: amountToChange
    });
  };
    
  

  render() {
    return (
      <div className="container">
        <h1>Change Calculator</h1>
        <hr />
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                Enter Information
              </div>
              <div className="container">
                <label className="font-weight-bold">How much is due?</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    $
                  </span>
                  <input type="number" name="amountDue" onChange={this.handleChange} className="form-control" />
                </div>
                <label className="font-weight-bold">How much was recieved?</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    $
                  </span>
                  <input type="number" name="amountReceived" onChange={this.handleChange} className="form-control" />
                </div>

              </div>
              <div className="card-footer mt-3">
                <button type="button" className="btn btn-primary btn-lg btn-block"onClick={this.handleSubmit}>Calculate</button>
              </div>
            </div>
          </div>
          <div className="col-8 bg-white pt-3 rounded text-center">
               <div className="alert alert-success mx-auto" name="total" role="alert">
                  The total change due is ${this.state.total}
              </div>
              <div className="row">
                <div className="col border border-light m-3 p-3 rounded bg-light" name="twenties"><h4>Twenties</h4><br /><h4>{this.state.twenties}</h4></div>
                <div className="col border border-light m-3 p-3 rounded bg-light" name="tens"><h4>Tens</h4><br /><h4>{this.state.tens}</h4></div>
                <div className="col border border-light m-3 p-3 rounded bg-light" name="fives"><h4>Fives</h4><br /><h4>{this.state.fives}</h4></div>
                <div className="col border border-light m-3 p-3 rounded bg-light" name="ones"><h4>Ones</h4><br /><h4>{this.state.ones}</h4></div>
              </div>
              <div className="row">
                <div className="col border border-light m-3 p-3 rounded bg-light" name="quarters"><h4>Quarters</h4><br /><h4>{this.state.quarters}</h4></div>
                <div className="col border border-light m-3 p-3 rounded bg-light"name="dimes"><h4>Dimes</h4><br /><h4>{this.state.dimes}</h4></div>
                <div className="col border border-light m-3 p-3 rounded bg-light" name="nickels"><h4>Nickels</h4><br /><h4>{this.state.nickels}</h4></div>
                <div className="col border border-light m-3 p-3 rounded bg-light" name="pennies"><h4>Pennies</h4><br /><h4>{this.state.pennies}</h4></div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
