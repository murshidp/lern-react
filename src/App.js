import React from "react"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      isFriendly:false,
      gender:"",
      favColor:"blue"
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event){
    const {name, value, type, checked} = event.target
    type == "checkbox" ?this.setState({[name]:checked}): this.setState({
      [name]:value
    })
  }
  render(){
    return(
      <form>
        <input type="text" value={this.state.firstName} name="firstName"
        placeholder="first name" onChange={this.handleChange}/><br></br>
        <input type="text" value={this.state.lastName} name="lastName"
        placeholder="last name" onChange={this.handleChange}/><br/>
        <textarea value={"some default value"} onChange={this.handleChange} />
        <br/>
        <label>
          <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange} />Is Friendly
        </label><br/>
        <label>
          <input type="radio" name="gender" value="male" checked={this.state.gender == "male"} onChange={this.handleChange} />
          male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={this.state.gender == "female"} onChange={this.handleChange} />
          female
        </label><br/>
        <select value={this.state.favColor} name="favColor" onChange={this.handleChange}>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="red">red</option>
        </select>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are {this.state.gender}</h2>
        <h2>Your color is {this.state.favColor}</h2>
        <button>submit</button>
      </form>
    )
  }
}

export default App