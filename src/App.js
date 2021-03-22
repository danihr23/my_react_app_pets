
import{Route, Link,Switch} from 'react-router-dom'


import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div className="container">
     <Header/>
     <Switch>
     <Route path="/" exact  component={Dashboard}  />
     <Route  path="/categories/:category"  component={Dashboard}/>
     </Switch>
     <Footer/>
     
     </div>
    
  );
}

export default App;
