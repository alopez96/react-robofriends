import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../index.css'


//state is something that can change, usually lives in parent, to pass down to children
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})

  }
  render(){
    const {robots, searchfield} = this.state; //with this you can call robots instead of this.state.robots
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return(
      <div className='tc'>
        <h1 className='nice-font'> RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots}/>
      </Scroll>
    </div>
    );
  }
}

export default App;
