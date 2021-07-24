import { IIngredient } from './ingredient.interface';

export interface IRecipe {
  recipe_id: string;
  recipe_name: string;
  recipe_description: string;
  ingredients: IIngredient[];
  recipe_image_url: string;
  directions: string[];
}
