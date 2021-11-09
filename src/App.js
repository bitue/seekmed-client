import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>


            </Route>
            <Route exact path='/home'>
              <Home></Home>


            </Route>
            <PrivateRoute  path='/appointment'>
              <Appointment></Appointment>


            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>


            </Route>

            <Route exact path='/register'>
              <Register></Register>


            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
