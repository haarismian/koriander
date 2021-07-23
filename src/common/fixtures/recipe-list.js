const recipeList = [
  {
    recipe_id: 'abc123',
    recipe_name: 'Cookies',
    recipe_description: 'unreal cookies',
    ingredients: [
      {
        ingredient_qty: '1',
        ingredient_measurement: 'lb',
        ingredient_name: 'butter',
      },
      {
        ingredient_qty: '1',
        ingredient_measurement: 'lb',
        ingredient_name: 'flour',
      },
    ],
    recipe_image_url:
      'https://preview.redd.it/glh2y8nqfb401.jpg?width=512&auto=webp&s=a78ff7c1e14c0c8aca95fc08ae2e89615d32fd60',
    directions: ['bake cookies', 'eat cookies'],
  },

  {
    recipe_id: 'xyz324',
    recipe_name: 'Bananas',
    recipe_description: 'unreal bananas',
    recipe_image_url:
      'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg',
    directions: ['peel banana', 'eat banana'],
    ingredients: [
      {
        ingredient_qty: '1',
        ingredient_measurement: 'unit',
        ingredient_name: 'banana',
      },
      {
        ingredient_qty: '1',
        ingredient_measurement: 'lb',
        ingredient_name: 'sugar',
      },
    ],
  },
];

export default recipeList;
