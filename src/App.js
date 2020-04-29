import React from "react"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      age:"",
      gender:"",
      destination:"",
        isVegan:false,
        isKosher:false,
        isLactoseFree:false
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event) {
    const {name, value, type,checked} = event.target
    type === "checkbox" ?
    this.setState({
        [name]:checked
    }):
    this.setState({
      [name]:value
    })
  }
  render(){
    return(
      <main>
        <form>
          <input name="firstName" 
          value={this.state.name}
          placeholder="firstname" onChange={this.handleChange} /><br/>
          <input name="lastName" 
          value={this.state.lastName}
          placeholder="lastname" onChange={this.handleChange} /><br/>
          <input name="age" 
          value={this.state.age}
          placeholder="age" onChange={this.handleChange}/><br/>
          <label>
            <input type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}/>Male
          </label>
          <label>
            <input type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}/>Female
          </label><br/>
          <select value={this.state.destination} name="destination" onChange={this.handleChange}>
            <option value="">---select---</option>
            <option value="germany">germany</option>
            <option value="india">india</option>
            <option value="usa">usa</option>
            <option value="norway">norway</option>
          </select>
          <label>
            <input type="checkbox"
            name="isVegan"
            onChange={this.handleChange}
            checked={this.state.isVegan} />isVegan?
          </label><br/>
          <label>
            <input type="checkbox"
            name="isKosher"
            onChange={this.handleChange}
            checked={this.state.isKosher} />isKosher?
          </label><br/>
          <label>
            <input type="checkbox"
            name="isLactoseFree"
            onChange={this.handleChange}
            checked={this.state.isLactoseFree} />isLactoseFree?
          </label><br/>
        </form>
        <h3>Information</h3>
    <h2>your name is {this.state.firstName} {this.state.lastName}</h2>
    <h2>age {this.state.age}</h2>
    <h2>Gender {this.state.gender}</h2>
    <h2>destination {this.state.destination}</h2>
    <h2>dietery Restriction</h2>
    <p>vegan:{this.state.isVegan ? "yes":"no"}<br/>
    kosher:{this.state.isKosher ? "yes":"no"}<br/>
    lactosefree:{this.state.isLactoseFree ? "yes":"no"}</p>
      </main>
    )
  }
}
export default App