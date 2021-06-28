import './App.css';
import React from 'react'
import { Cardlist } from './components/monster-list/monster-component'
import { Searchfield } from './components/search-field.component/search-field';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  handleChange = (e) => this.setState({ searchField: e.target.value})

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="app">
        <h1>Monsters Rolodex</h1>
        <Searchfield placeholder="search user" handleChange={this.handleChange} />
        <Cardlist monsters={filteredMonsters} />
      </div>
    )
  }
}


export default App