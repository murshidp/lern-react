import React from "react"
import Joke from "./components/Joke"
function App(){
  return(
    <div>
      <Joke punchLine="iam fine thankyou"/>
      <Joke question="your name" punchLine="murshid"/>
      <Joke question="your qualification" punchLine="mca"/>
      <Joke question="your experiance in" punchLine="django framework"/>
      <Joke question="your degree" punchLine="bsc computer science"/>
      <Joke question="how old are you" punchLine="24 year old"/>
    </div>
  )
}
export default App