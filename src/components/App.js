import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import MyProfile from './MyProfile';
import Rockets from './Rockets';
import { loadRocketsThunk } from '../redux/rockets/rockets';

import '../style/App.css';
import Navbar from './Navbar';
import Missions from './Missions';
import store from '../redux/storeConfig';
import { getMissions } from '../redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRocketsThunk());
  }, [dispatch]);

  useEffect(() => {
    store.dispatch(getMissions());
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <hr />
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/my-profile">
            <MyProfile />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
