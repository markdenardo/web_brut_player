import React from 'react'

  class Movie extends React.Component {
    render(){
      const {
        id,
        name,
        url,
        dir,
        year
      } = this.props
        const {getCurrentUrl} = this.props

        return(
          <div className="movie">
            <h1>{name}</h1>
            <h2>{url}</h2>
            <h2>{dir}</h2>
            <h2>{year}</h2>
          </div>
        )
    }
  }
export default Movie;
