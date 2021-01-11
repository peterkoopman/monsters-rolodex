import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    // Destrucutre the state object
    const { monsters, searchField } = this.state;
    // filter the monsters by the search field value
    const filteredMonsters = monsters.filter( monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* use the filtered object to update our DOM */}
        <SearchBox
          placeholder='Search Monsters'
          handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App;
