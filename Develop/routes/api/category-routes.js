const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  const allCategories  = await Category.findAll(
    {
    //be sure to include its associated Products
   include:[{model:Product}]

  });
res.send(allCategories);

});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  const category = await Category.findAll({
    where: {
      id: req.params.id
    }
    ,
    // be sure to include its associated Products
    include:[{model:Product}]
  });
  res.send(category);
});

router.post('/', async(req, res) => {
  // create a new category
  console.log(req.body)
  await Category.create({
    category_name:req.body.category
  })
  res.send(req.body);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
