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

  try {
    console.log(req.body);
    console.log(req.body.category);
    await Category.create({
      category_name: req.body.category

    })
    res.send(`${req.body.category} has been added`);
  }
  catch(err) {
    console.error(err)
    res.status(500).send(`Server error`)
    
  }
  
});

  



router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  console.log(req.params.id);

  await Category.destroy({

    where: { id: req.params.id },

  })
  res.send(`Category ${req.params.id} has been deleted`);
});


module.exports = router;
