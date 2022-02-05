// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import FirstDisplay from "./components/FirstDisplay/FirstDisplay";
import FirstHeader from "./components/FirstHeader/FirstHeader";
import Home from "./components/Home/Home";
import SecondHeader from "./components/SecondHeader/SecondHeader";
import WelcomeContainer from "./components/WelcomeContainer/WelcomeContainer";
import WhyEducation from "./components/WhyEducation/WhyEducation";

function App() {
  return (
    <div className="App">
      <div className="first-container">
      <FirstHeader></FirstHeader>
      <SecondHeader></SecondHeader>
      <FirstDisplay></FirstDisplay>
      </div>
      <BrowserRouter> 
        
        <Routes>
          
          <Route path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>}></Route>

        
        </Routes>
        <WelcomeContainer></WelcomeContainer>
       <WhyEducation></WhyEducation>
        
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
