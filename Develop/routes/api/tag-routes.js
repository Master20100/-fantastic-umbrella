const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
const tags = await Tag.findAll();
    {
      // be sure to include its associated Product data
      include:[{model:Product}]
    }
    res.send(tags);
});


router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  const tag = await Tag.findAll(
    {
where:{id:req.params.id}
},
// be sure to include its associated Product data ???
{
  include:[{model:Product}]
}
);
res.send(tag);
  })

  router.post('/', async(req, res) => {
    // create a new tag
  await Tag.create({
    tag_name: req.body.tag_name
  });
  res.send(`Tag ${req.body.tag_name} has been added`)
  });
  

  router.put('/:id', async(req, res) => {
    // update a tag's name by its `id` value
  await Tag.update({
    tag_name: req.body.tag_name,
  },
  {
    where: { id: req.params.id },
  })
   res.send(`Tag number ${req.params.id} has been updated`)
});

  router.delete('/:id', async(req, res) => {
    // delete on tag by its `id` value
    await Tag.destroy({
      where:{ id:req.params.id }}
    )
    res.send(`Tag number ${req.params.id} has been deleted`);
  });

module.exports = router;
