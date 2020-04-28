import React from "react"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:""
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]:value
    })
  }
  render(){
    return(
      <form>
        <input type="text" value={this.state.firstName} name="firstName"
        placeholder="first name" onChange={this.handleChange}/><br></br>
        <input type="text" value={this.state.lastName} name="lastName"
        placeholder="last name" onChange={this.handleChange}/>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    )
  }
}

export default App