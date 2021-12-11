import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Navbar from './components/navbar/navbar.js'
import Home from './pages/Home/home'
import Alumni from './pages/Alumni/Alumni'

import 'swiper/swiper.scss';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/alumni" component={Alumni} />

        </Switch>
      </Router>
 
    </>
  )
}


export default App;





