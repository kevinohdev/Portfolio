export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the project',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name:'order',
      title:'Order',
      type: 'number', 
  },
  {
    name: 'tech',
    title: 'Tech',
    type: 'array',
    of: [{type: 'string'}]
  }
  ]
}