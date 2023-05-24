import { Component} from 'react'; 

import './App.css';

class App extends Component{ 

  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

    render(){

      const filteredMonsters = this.state.monsters.filter(monster => {
        return monster.name.toLocaleLowerCase().includes(this.state.searchField);
      })


      
      return (
        <div className="App">
          <input
            class-name="search-box"
            type='search'
            placeholder='search monsters'
            onChange={event =>{
              const searchField = event.target.value.toLocaleLowerCase(); 
              this.setState(()=>{
                return {searchField}
              })
            }}
          />
          {
            filteredMonsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
          }
          
        </div>
    )}
}


export default App;
