import './App.scss';
import React, {Component} from 'react';
import {CardList} from './components/CardList/CardList.js';
import {SearchBox} from './components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => response.json())
      .then(result => {
        console.log(result.results);
        this.setState({pokemons: result.results});
        const urls = result.results.map(item => item.url);
        // const slicedUrls = urls.map(url => url.split('/'));
        // const slicedIds = slicedUrls.map(slicedUrl => slicedUrl[6]);
        // this.setState({ids: slicedIds});
        // console.log("these are your ids: ", slicedIds);
        console.log('this is your urls: ',urls);
        // urls.forEach(url => {
        //   fetch(`${url}`)
        //     .then(resp => resp.json())
        //     .then(result => {
        //       console.log(result);
        //       const joined = this.state.ids.concat(result.id);
        //       this.setState({ids: joined});
        //     });
        // });
      });
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {pokemons, searchField} = this.state;
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchField.toLowerCase()));
    console.log("these are your filtered pokemonds: ", filteredPokemons);

    return (
      <div className="App">
        <h1 className="site-title">Kanto Pokédex</h1>
        <SearchBox placeholder="search kanto pokédex" handleChange={this.handleChange}/>
        <CardList pokemons={filteredPokemons} ids={filteredPokemons.map(item => item.url.split('/')[6])}/>
      </div>
    );
  }
}

export default App;
