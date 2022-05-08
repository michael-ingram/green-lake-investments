export default {
  name: 'homes',
  title: 'Homes',
  type: 'document',
  icon: () => `🏠`,
  fields: [
    {
      name: 'name',
      title: 'Property address',
      type: 'string',
      description: 'Address of Property',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxlength: 100,
      },
    },
    {
      name: 'rent',
      title: 'Rent',
      type: 'number',
      description: 'Monthly Rent',
      validation: (Rule) => Rule.min(500),
    },
    {
      name: 'squarefeet',
      title: 'Square Feet',
      type: 'number',
    },
    {
      name: 'beds',
      title: 'Number of Beds',
      type: 'number',
    },
    {
      name: 'baths',
      title: 'Number of Bathrooms',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Home Description',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
