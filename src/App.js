
import{Route, Link,Switch} from 'react-router-dom'


import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="container">
     <Header/>
      <Route path="/"   component={}  />
     <h2>Dani</h2>
     <Footer/>
    </div>
  );
}

export default App;
