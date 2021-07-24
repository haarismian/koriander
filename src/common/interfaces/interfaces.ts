export interface IRecipe {
  recipe_id: string;
  recipe_name: string;
  recipe_description: string;
  ingredients: IIngredient[];
  recipe_image_url: string;
  directions: string[];
}

export interface IIngredient {
  ingredient_qty: number;
  ingredient_measurement: string;
  ingredient_name: string;
}
