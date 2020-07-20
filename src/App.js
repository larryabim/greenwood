import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import HeaderMenu  from './components/Header'
import { Header, Search } from 'semantic-ui-react'
import CustomSearch from './components/Search'

function App() {
  return (
    <div >
   <HeaderMenu/>

  <div className="new">
    <h2 style={{padding: 24}}> Explore Saskatoon</h2>
    <h3> Let's Uncover Black Owned Businesses Nearest to You  </h3>
    <Search/>
   </div>

    </div>
  );
}

export default App;
