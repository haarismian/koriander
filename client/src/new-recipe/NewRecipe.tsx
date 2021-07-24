import { Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { IRecipe } from '../common/interfaces/interfaces';
const { Option, OptGroup } = Select;
const { TextArea } = Input;

const NewRecipe = () => {
  const onFinish = (values: any) => {
    console.log(values);

    const formattedNewRecipe: IRecipe = {
      recipe_id: 'test',
      recipe_name: values.title,
      recipe_description: values.description,
      ingredients: values.ingredients,
      recipe_image_url: values.recipe_image_url,
      directions: values.directions,
    };
    console.log(formattedNewRecipe);
  };

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      {/* Title & Description */}
      <Form.Item
        label="Title"
        name={'title'}
        rules={[{ required: true, message: 'Missing title' }]}
      >
        <Input placeholder="Recipe Title" />
      </Form.Item>
      <Form.Item label="Description" name={'description'}>
        <Input placeholder="Recipe Description" />
      </Form.Item>
      {/* Title & Description  END*/}

      {/* Recipe image URL */}
      <Form.Item label="Recipe Image URL" name={'recipe_image_url'}>
        <Input placeholder="Recipe Image URL" />
      </Form.Item>
      {/* Recipe image URL END */}

      {/* Ingredients list */}
      {/* TODO: Each one should be quantity, measurement, ingredient name, optional preparation */}
      <Form.List name="ingredients">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space
                key={key}
                style={{ display: 'flex', marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'ingredient_qty']}
                  fieldKey={[fieldKey, 'ingredient_qty']}
                  // rules={[{ required: true, message: 'Missing first name' }]}
                >
                  <Input placeholder="Quantity" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'ingredient_measurement']}
                  fieldKey={[fieldKey, 'ingredient_measurement']}
                  // rules={[{ required: true, message: 'Missing last name' }]}
                >
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    onChange={handleChange}
                    placeholder={'Measurement'}
                    optionFilterProp="children"
                  >
                    <OptGroup label="Miscellaneous">
                      <Option value="units">Units</Option>
                      <Option value="pinch">Pinch</Option>
                    </OptGroup>
                    <OptGroup label="Volume">
                      <Option value="tbsp">Tablespoons (tbsp)</Option>
                      <Option value="tsp">Teaspoons (tsp)</Option>
                      <Option value="fl_oz">Fluid ounces (fl oz)</Option>
                    </OptGroup>
                    <OptGroup label="Weight">
                      <Option value="kg">Kilograms (kg)</Option>
                      <Option value="g">Grams (g)</Option>
                      <Option value="lb">Pounds (lb)</Option>
                      <Option value="oz">Ounces (oz)</Option>
                    </OptGroup>
                  </Select>
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'ingredient_name']}
                  fieldKey={[fieldKey, 'ingredient_name']}
                  // rules={[{ required: true, message: 'Missing last name' }]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add ingredient
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      {/* Ingredients list END*/}
      {/* Directions list */}
      <Form.List name="directions">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space
                key={key}
                style={{ display: 'flex', marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'directions']}
                  fieldKey={[fieldKey, 'directions']}
                  // rules={[{ required: true, message: 'Missing first name' }]}
                >
                  <TextArea rows={4} style={{ width: 500 }} />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add step
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      {/* Directions list end */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewRecipe;
