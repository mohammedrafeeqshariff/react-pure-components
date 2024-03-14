import React from "react"

export default class pureComponents extends React.PureComponent {

constructor(){
    super()
    this.state = {
        counter : 0,
        toggle : false,
    }
}
    incrementCount = ()=>{
        if(this.state.toggle){
            this.setState((prevState)=>({
                counter: prevState.counter+1
            }))
        }
    }

    toggleEvent = ()=>{
        this.setState(prevState => (
            {
                toggle : !prevState.toggle
            }
        ))
    }


  render() {
    console.log("pureComp")

    
    var toggleStyle = null
    if(this.state.toggle){

        toggleStyle = {
            backgroundColor : "green"
        }
    }else{

        toggleStyle = {
            backgroundColor : "red"
        }
    }

    return (
      <div>
        <h1>Pure component</h1>
        <h2>{this.state.counter}</h2>
        <span><button style={toggleStyle} onClick={this.toggleEvent}>Set toggle</button></span>
        <span><button onClick={this.incrementCount}>Counter</button></span>
        
      </div>
    )
  }
}
