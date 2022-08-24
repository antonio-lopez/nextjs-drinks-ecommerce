export default {
  name: 'beer',
  title: 'Beer',
  type: 'document',
  initialValue: {
    quantity: '4 Pack',
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
      name: 'beerStyle',
      title: 'Beer Style',
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
      name: 'quantity',
      title: 'Quantity',
      type: 'string',
    },
    { name: 'price', title: 'Price', type: 'number' },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'beerDetails',
      title: 'Beer Details',
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
