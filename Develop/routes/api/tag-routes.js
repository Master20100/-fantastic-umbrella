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

  router.post('/', (req, res) => {
    // create a new tag
  Tag.create({
    tag_name: req.body.tagName
  });
  res.send(req.body.tagName)
  });
  

  router.put('/:id', async(req, res) => {
    // update a tag's name by its `id` value
  await Tag.update({
    tag_name: req.body.tagName,
  },
  {
    where: { id: req.params.id },
  })
  });

  router.delete('/:id', async(req, res) => {
    // delete on tag by its `id` value
    const deletedTag = await Tag.destroy({
      where:{ id:req.params.id }}
    )
    res.send(deletedTag);
  });

module.exports = router;
