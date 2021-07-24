import { Button } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Recipe Gallery</Link>
        </li>
        <li>
          <Link to="/new-recipe">New Recipe</Link>
        </li>
      </ul>

      <hr />
    </div>
  );
}

export default Navbar;
