import React, {Component} from "react"

class List extends Component {
  constructor(){
    super ()
    
    this.state = {
      movies: []

    }
  }
  render(){
    return <h1>This Is The List Component</h1>
  }
}

export default List
