import './App.css';
import Nav from './nav';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './Home';
import Show from './show';
import Footer from './footer';
import mystore from './store/store';
import { Provider } from 'react-redux';


function App() {
  return (
<>
<Provider store={mystore}>



<BrowserRouter>
<Nav />

<Switch>
<Route  path={"/home"} component={Home}/>
<Route path={"/show/:id"} component={Show}/>

</Switch>
<Footer />
</BrowserRouter>




</Provider>

</>



  );
}

export default App;
