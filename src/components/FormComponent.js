
import React from "react"
function FormComponent(props){
    return(
        <main>
        <form>
          <input name="firstName" 
          value={props.data.name}
          placeholder="firstname" onChange={props.handleChange} /><br/>
          <input name="lastName" 
          value={props.data.lastName}
          placeholder="lastname" onChange={props.handleChange} /><br/>
          <input name="age" 
          value={props.data.age}
          placeholder="age" onChange={props.handleChange}/><br/>
          <label>
            <input type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}/>Male
          </label>
          <label>
            <input type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}/>Female
          </label><br/>
          <select value={props.data.destination} name="destination" onChange={props.handleChange}>
            <option value="">---select---</option>
            <option value="germany">germany</option>
            <option value="india">india</option>
            <option value="usa">usa</option>
            <option value="norway">norway</option>
          </select>
          <label>
            <input type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.data.isVegan} />isVegan?
          </label><br/>
          <label>
            <input type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.isKosher} />isKosher?
          </label><br/>
          <label>
            <input type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree} />isLactoseFree?
          </label><br/>
        </form>
        <h3>Information</h3>
    <h2>your name is {props.data.firstName} {props.data.lastName}</h2>
    <h2>age {props.data.age}</h2>
    <h2>Gender {props.data.gender}</h2>
    <h2>destination {props.data.destination}</h2>
    <h2>dietery Restriction</h2>
    <p>vegan:{props.data.isVegan ? "yes":"no"}<br/>
    kosher:{props.data.isKosher ? "yes":"no"}<br/>
    lactosefree:{props.data.isLactoseFree ? "yes":"no"}</p>
      </main>
    )
}
export default FormComponent