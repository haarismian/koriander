import PropTypes from 'prop-types';
import { Image, Checkbox, Divider } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import recipeList from '../common/fixtures/recipe-list';

const ViewRecipe = () => {
  // TODO: this page should probably query the backend for the recipe id to get all the relevant details
  // let { id } = useParams();

  // let recipe = recipeList.find((element) => element.recipe_id === id);

  return (
    <div>
      I am view recipe
      {/* <h1>{recipe.recipe_name}</h1>
      <Image width={200} src={recipe.recipe_image_url} />
      {recipe.ingredients.map((ingredient) => (
        <ul>
          <Checkbox>
            {ingredient.ingredient_qty} {ingredient.ingredient_measurement}{' '}
            {ingredient.ingredient_name}
          </Checkbox>
        </ul>
      ))}
      <Divider></Divider>
      <h1>Directions</h1>
      <ol>
        {recipe.directions.map((direction) => (
          <li>{direction}</li>
        ))}
      </ol> */}
    </div>
  );
};

export default ViewRecipe;
