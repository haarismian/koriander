import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './RecipeGallery.css';
import { recipeList } from '../common/fixtures/recipe-list';
import { IRecipe } from '../common/interfaces/interfaces';
import axios from 'axios';

const RecipeGallery = () => {
  //TODO: update card with links to each recipe ID
  //TODO: Also need to check the type with proptypes
  //TODO: This should get the data for the list of recipes
  const [data, setData] = useState<any>({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux'
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="recipe-gallery-container">
      <ul>
        {data.hits.map((item: any) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      {recipeList.map((recipe: IRecipe) => (
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
};

export default RecipeGallery;
