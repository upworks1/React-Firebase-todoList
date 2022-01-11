import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import AddNote from "./components/AddNote"
import NoteLists from "./components/NoteLists"
import "./App.css"
import "./App.scss"


function App() {
  
 


  return (
    <div className="App">
    
    
    
    
    <NavbarComponent></NavbarComponent>
    <p>using React Hooks and Firebase</p>

    <AddNote />
    <h3 class="h">Don't forget to do : </h3>
    <NoteLists />
  
    <div class="sea">
    <div class="circle-wrapper">
        <div class="bubble"></div>
        <div class="submarine-wrapper">
            <div class="submarine-body">
                <div class="window"></div>
                <div class="engine"></div>
                <div class="light"></div>
            </div>
            <div class="helix"></div>
            <div class="hat">
              <div class="leds-wrapper">
                  <div class="periscope"></div>
                  <div class="leds"></div>
              </div>
            </div>
        </div>
    </div>
    <AddNote />
</div>

  </div>
  

  
  );
}

export default App;
