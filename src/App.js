import React from "react"

class App extends React.Component{
  constructor() {
   super()
   this.state   ={
     loading:false,
     character:{}
   }
  }
  componentDidMount(){
    this.setState({loading:true})
    fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then(response =>response.json())
    .then(data =>{
      this.setState({loading:false,
                      character:data    
        })

    })
  }
  render(){
    const text = this.state.loading ? "Loading....." : this.state.character.title
    return(
      <div>
      <p>{text}</p>
    </div>
    )
    
  }
}

export default App