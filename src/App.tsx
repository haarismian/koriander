import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Row, Col } from 'antd';
import './App.css';

import Navbar from './navbar/Navbar';
import RecipeGallery from './recipe-gallery/RecipeGallery';
import ViewRecipe from './view-recipe/ViewRecipe';
import NewRecipe from './new-recipe/NewRecipe';

function App() {
  return (
    <Router>
      <Navbar />
      <Row>
        <Col span={12} offset={6}>
          <Switch>
            <Route exact path="/">
              <RecipeGallery />
            </Route>
            <Route path="/new-recipe">
              <NewRecipe />
            </Route>
            <Route path="/recipes/:id" children={<ViewRecipe />}></Route>
          </Switch>
        </Col>
      </Row>
    </Router>
  );
}

export default App;
