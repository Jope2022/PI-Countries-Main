import LandingPage from '../src/Components/LandingPage/LandingPage';
import Home from '../src/Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Countries from '../src/Components/Country/Country';
import CountryDetail from '../src/Components/CountryDetail/countryDetail';
import ActivityCreate from './Components/ActivityCreate/ActivityCreate';
import SearchBar from './Components/SearchBar/SearchBar';
import Country from "./Components/Country/Country";
import ActivityList from './Components/ActivityList/ActivityList';
import Activity from './Components/Activity/Activity';
import Search from './Components/Search/Search';
import Countries from './Components/Countries/Countries';


function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route exact path="/countries" component={Country}/>
        <Route exact path="/countries/:idPais" component={CountryDetail}/> // recordar esta ruta
        <Route exact path="/countries?name=" component={Countries}/> 
        <Route path="/create-activity" component={ActivityCreate}/>  
        <Route path="/activities" component={ActivityList}/>  
      </Switch>
    </Router>
  );
}

export default App;
