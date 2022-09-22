//imported the logo
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
//importing the css file = apply css
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log('render');
  /*
  array destructuring: assign variables to values inside of an array
  */
  const [searchField, setSearchField] = useState(''); 
  //gives back an array of 2 values 
  //[value we want to store, setValue] each hook only hooks into one
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  const [stringField, setStringField] = useState('');

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters =  monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
      });

      setFilterMonsters(newFilteredMonsters);
      console.log('effect is firing');
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    // we are getting string value back from search field
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const onStringChange = (event) => {
    setStringField(event.target.value);
  }

  return (
    <div className="App">
      <h1 className='app-title'>TechFriends</h1>
      <SearchBox 
      //values here get passed into props defined in their component
      className='monsters-search-box'
      onChange={ onSearchChange } 
      placeholder='Find your new tech bestie'
      />
      <SearchBox 
      //values here get passed into props defined in their component

      onChange={ onStringChange } 
      placeholder='set string'
      />
      <CardList monsters={ filteredMonsters } />
    </div>
  );
}

//this App component represents the entire application
// class App extends Component {
//   constructor() {
//     super();
//       //initialized a local state inside this App component
//     this.state = {
//       monsters: [],
//       searchField: '' //starts off empty string, the string typed to search
//     };
//   }

  // componentDidMount() {
  //   console.log('did mount');
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((users) => this.setState(() => {
  //     return {
  //       monsters: users
  //     }
  //   }))
  // }

//   //changes the state object propert { searchField }, replacing value with searchField
  // onSearchChange = (event) => {
  //   const searchField = event.target.value.toLowerCase();
  //   this.setState(() => {
  //     return { searchField };
  //     }) 
  // }

//   render() {
//     //optimize variables
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
    
//     // refers to the original state data { monsters } and the { searchField }
//     // if {searchField} still has the initialized value of empty string '', 
//     // filteredMonsters returns all the monsters in the original data
    // const filteredMonsters = monsters.filter((monster) => {
    //   return monster.name.toLowerCase().includes(searchField);
    //   });
    

//   }

// }

export default App;
