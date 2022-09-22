//imported the logo
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
//importing the css file = apply css
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  /*
  array destructuring: assign variables to values inside of an array
  */
  const [searchField, setSearchField] = useState(''); 
  //gives back an array of 2 values 
  //[value we want to store, setValue] each hook only hooks into one
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  console.log('rendered');

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
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    // we are getting string value back from search field
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>TechFriends</h1>
      <SearchBox 
      //values here get passed into props defined in their component
      className='monsters-search-box'
      onChange={ onSearchChange } 
      placeholder='> Find your robofriend'
      />
      <CardList monsters={ filteredMonsters } />
      <div className="footer">
        <span className='credit'>Made with React</span>
        <span className='credit'>By Daevah T.</span>
      </div>
    </div>
  );
}

export default App;
