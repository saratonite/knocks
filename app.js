


// Container Component
var App = React.createClass({
  getInitialState:function(){
    return {randomQuote:{author:null},textColor:{code:'red'}};
  },
  componentDidMount:function(){
    this.setState({randomQuote:this.getRandom()});
    console.log(this.props.colors);
  },
  getRandom:function(){
    var random_pick = Math.floor((Math.random()*this.props.quotes.length));
    return this.props.quotes[random_pick];
  },
  getRandomColor:function(){
    var random_pick = Math.floor((Math.random()*this.props.colors.length));
    return this.props.colors[random_pick];
  },
  changeQuote:function(){
    this.setState({randomQuote:this.getRandom()});
  },
  render:function(){

    return(
      <div className="app-container">
        <Quote quote={this.state.randomQuote} knock={this.changeQuote} color={this.getRandomColor()}/>
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
    var qStyles = {color:this.props.color.code};
    return(
      <div className="qContainer" style={qStyles}>
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

ReactDOM.render(<App quotes={quotes} colors={__colors}/>,document.getElementById('app'));
