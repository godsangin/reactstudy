import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title:"Matrix",
    poster:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
  },
  {
    title:"Matrix",
    poster:"https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
  },
  {
    title:"Oldboy",
    poster:"https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SL1500_.jpg"
  },
  {
    title:"Star Wars",
    poster:"https://starwarsblog.starwars.com/wp-content/uploads/2019/03/star-wars-celebration-chicago-lightspeed-tall-C.jpg"
  }
]

class App extends Component {
  componentWillMount(){
    console.log("will mount");
  }

  componentDidMount(){
    console.log('did mount');
    setTimeout(() =>{
      this.setState({
        greeting:'Hello again!'
      })
    }, 5000)
  }

  state = {
    greeting:'Hello'
  }

  render(){
    console.log('did render');
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
