import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StreamShow from './components/StreamShow';
import StreamCreate from './components/StreamCreate';
import StreamEdit from './components/StreamEdit';
import StreamList from './components/StreamList';
import StreamDelete from './components/StreamDelete';
import Header from './components/Header';


const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <StreamList />
          </Route>
          <Route path="/streams/new" exact>
            <StreamCreate />
          </Route>
          <Route path="/streams/edit" exact>
            <StreamEdit />
          </Route>
          <Route path="/streams/delete" exact>
            <StreamDelete />
          </Route>
          <Route path="/streams/show" exact>
            <StreamShow />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;