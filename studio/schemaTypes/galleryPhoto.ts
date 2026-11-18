import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Gallery Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      validation: (r) => r.required(),
    }),
  ],
  preview: {select: {media: 'image'}},
})