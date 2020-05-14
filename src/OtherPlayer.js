import React from 'react'
import ReactPlayer from 'react-player'


class OtherPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: []
    };
  }

  componentDidMount() {
    fetch("https://web-brut-api.herokuapp.com/movies")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            movies: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, movies } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {movies.map(movie => (
            <li key={movie.name}>
              {movie.id} {movie.name} {movie.dir} {movie.year}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default OtherPlayer;
