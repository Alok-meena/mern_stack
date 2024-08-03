import logo from './logo.svg';
import './App.css';
import Header from './header.js'
import Footer from './footer.js'
import Content from './content.js';


function App() {
  //it's name should be different from the file name and take it as Header 
  //as header is predefined as a tag in html

  //order should be correct in case of header and footer
  return(<div className="App">
            <Header/>
            <Content/>
            <img src={logo} className="App-logo" alt="Logo" />
            <Footer/>
        </div>)
  
}

export default App;
