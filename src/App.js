import NavBar from './components/NavBar/NavBar';
import LoginPage from './components/Pages/LoginPage';
import Covid from './components/Pages/Covid/Covid';
import Todo from './components/Pages/Todo/Todo';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <body>
        <header>
          <NavBar>
            
          </NavBar>
        </header>
        <main>
            <Switch>
                <Route path="/" exact>
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/covid" exact>
                    <Covid></Covid>
                </Route>
                <Route path="/list" exact>
                    <Todo/>
                </Route>
            </Switch>
        </main>
      </body>  
    </Router>
   
  );
}

export default App;
