import React from 'react';
import './App.css';
import Landing from './pages/Landing.js';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import GeneralForm from './pages/GeneralForm.js';
import FileUpload from './pages/FileUpload.js';
import ManualEntry from './pages/ManualEntry.js';
import Review from './pages/Review.js';
import NotFound from './pages/NotFound.js'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                  <div id="page-id">
                  <Switch>
                        <Route path="/" component={Landing} exact/>
                        <Route path="/auth" component={Login} />
                        <Route path="/addClasses" component={Home} />
                        <Route path="/classroomSetup" component={GeneralForm} />
                        <Route path="/fileUpload" component={FileUpload} />
                        <Route path="/addStudents" component={ManualEntry} />
                        <Route path="/review" component={Review} />
                        <Route component={NotFound} />
                    </Switch>
                  </div>
                </div>
            </Router>
        );
    }
}

export default App;

/*
<Route path="/classroomReady" component={Complete} />

function PrivateRoute({ children, ...rest }) {
    const token = sessionStorage.getItem('access_token');

    return (
        <Route
          {...rest}
          render={({ location }) =>
            token ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
    );
}

<PrivateRoute path="/addClasses">
  <Home />
</PrivateRoute>
<PrivateRoute path="/classroomSetup">
  <GeneralForm />
</PrivateRoute>
<PrivateRoute path="/fileUpload">
  <FileUpload />
</PrivateRoute>
<PrivateRoute path="/addStudents">
  <ManualEntry />
</PrivateRoute>
<PrivateRoute path="/review">
  <Review />
</PrivateRoute>
*/
