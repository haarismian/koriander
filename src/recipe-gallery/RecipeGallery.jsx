import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './RecipeGallery.css';
import recipeList from '../common/fixtures/recipe-list';

export default class RecipeGallery extends React.Component {
  render() {
    //TODO: update card with links to each recipe ID
    //TODO: Also need to check the type with proptypes
    //TODO: This should get the data for the list of recipes

    return (
      <div className="recipe-gallery-container">
        {recipeList.map((recipe) => (
          <Link to={`/recipes/${recipe.recipe_id}`}>
            <Card
              className="recipe-gallery-card"
              hoverable
              cover={<img alt="example" src={recipe.recipe_image_url} />}
            >
              <Meta
                title={recipe.recipe_name}
                description={recipe.recipe_description}
              />
            </Card>
          </Link>
        ))}
      </div>
    );
  }
}
