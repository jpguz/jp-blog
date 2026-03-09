import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'jpguz/jp-blog',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descripción', multiline: true }),
        publishedAt: fields.date({ label: 'Fecha de publicación', defaultValue: { kind: 'today' } }),
        draft: fields.checkbox({ label: 'Borrador', defaultValue: false }),
        content: fields.markdoc({ label: 'Contenido' }),
      },
    }),
  },
});
