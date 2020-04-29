import React from 'react'
import ReactPlayer from 'react-player'

class Player extends React.Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
  };
  componentDidMount(){
    const url = "https://web-brut-api.herokuapp.com/movies"
    fetch(url)
    .then(res => res.json())
    .then(movArr => {
      this.setState({
        movies: movArr
      },()=>console.log("movies",this.state.movies))
    })
  }
  render(){
    return <div> (click to start/stop; arrows to advance/rewind)
    <ReactPlayer url="https://www.youtube.com/watch?v=-7Wfcvd4vaA"playing/>
    </div>
  }
}

export default Player;
