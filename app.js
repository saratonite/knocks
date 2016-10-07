


// Container Component
var App = React.createClass({
  getInitialState:function(){
    return {randomQuote:{author:null}}
  },
  componentDidMount:function(){
    this.setState({randomQuote:this.getRandom()});
  },
  getRandom:function(){
    var random_pick = Math.floor((Math.random()*this.props.quotes.length));
    return this.props.quotes[random_pick];
  },
  changeQuote:function(){
    this.setState({randomQuote:this.getRandom()});
  },
  render:function(){

    return(
      <div className="app-container">
        <Quote quote={this.state.randomQuote} knock={this.changeQuote}/>
        <div>
        </div>
      </div>
    );

  }
});

// theQuote Component
var Quote = React.createClass({
  render:function(){

    var author = this.props.quote.author ? <div className="author"> ~ <i>{this.props.quote.author}</i></div> :null;
    return(
      <div className="qContainer">
        {this.props.quote.text}
        {author}

        <div className="qControls">
          <button onClick={this.props.knock}>Knock It !!!</button>
        </div>
      </div>

    );
  }
});




// Initiate App

ReactDOM.render(<App quotes={quotes}/>,document.getElementById('app'));
