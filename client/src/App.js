import LandingPage from '../src/Components/LandingPage/LandingPage';
import Home from '../src/Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetail from '../src/Components/CountryDetail/countryDetail';
import ActivityCreate from './Components/ActivityCreate/ActivityCreate';
import Country from "./Components/Country/Country";
import Countries from './Components/Countries/Countries';
import About from './Components/About/About';


function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route exact path="/countries" component={Country}/>
        <Route exact path="/countries/:idPais" component={CountryDetail}/> 
        <Route exact path="/countries?name=" component={Countries}/> 
        <Route path="/activitycreate" component={ActivityCreate}/>  
        <Route path="/about" component={About}/>  
      </Switch>
    </Router>
      );
}

export default App;
