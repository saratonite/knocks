


// Container Component
var App = React.createClass({

  getRandom:function(){
    var random_pick = Math.floor((Math.random()*this.props.quotes.length));
    return this.props.quotes[random_pick];
  },

  render:function(){

    return(
      <div className="app-container">
        <div>
          <h3>Qtz</h3>
        </div>
        <Quote quotetext={this.getRandom()}/>
      </div>
    );

  }
});

// theQuote Component
var Quote = React.createClass({
  render:function(){
    return(
      <div className="qContainer">
        {this.props.quotetext}
      </div>

    );
  }
});




// Initiate App

ReactDOM.render(<App quotes={quotes}/>,document.getElementById('app'));
