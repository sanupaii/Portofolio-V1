export default {
  name: 'techStack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon Name (React Icons/Simple Icons)',
      type: 'string',
      description: 'The name of the icon component, for example: FaReact'
    },
    {
      name: 'color',
      title: 'Color (Hex)',
      type: 'string',
      description: 'The hex color for the icon, for example: #61DAFB'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
}
