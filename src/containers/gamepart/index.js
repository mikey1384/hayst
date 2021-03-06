import React from 'react'
import Home from './Home'
import PageOne from './PageOne'
import {Route, Switch, Link} from 'react-router-dom';

export default function Greetings() {
    return (
      <div>
        <div>
      <Switch>
        <Route exact path="/game/" component={Home} />
        <Route path="/game/1" component={PageOne}/>
      </Switch>
      <h30>
      <div className="btn btn-success">
        <Link
          style={{
            color: 'white',
            fontSize: '30px',
          }}
          to="/game"
        >
          To Page One
        </Link>
      </div>
      <div className="btn btn-success">
        <Link
          style={{
            color: 'white',
            fontSize: '30px',
          }}
          to="/game/1"
        >
          To Page Two
        </Link>
      </div>
      </h30>
    </div>
      </div>
    )
  }