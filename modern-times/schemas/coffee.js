export default {
  name: 'coffee',
  title: 'Coffee',
  type: 'document',
  initialValue: {
    size: '12 oz',
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: { hotspot: true },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'coffeStyle',
      title: 'Coffee Style',
      type: 'string',
    },
    {
      name: 'styleDetails',
      title: 'Style Details',
      type: 'string',
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    { name: 'price', title: 'Price', type: 'number' },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'coffeeDetails',
      title: 'Coffee Details',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'id',
        maxLength: 90,
      },
    },
  ],
};
