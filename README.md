# remark-heading-custom-ids

[Remark](https://github.com/remarkjs/remark) plugin for custom heading id.


## Install

```
npm install remark-heading-custom-ids
```

Using [remark](https://github.com/remarkjs/remark) (mdast):

```js
require('unified')()
  .use(require('remark-parse'))
  .use(require('remark-stringify'))
  .use(require('remark-heading-custom-ids'), {
    /* options */
  })
  .use(require('remark-html'))
  .process(file, (err, file) => console.log(String(file)));
```

Using [rehype](https://github.com/rehypejs/rehype) (hast):

```js
require('unified')()
  .use(require('remark-parse'))
  .use(require('remark-heading-custom-ids'), {
    /* options */
  })
  .use(require('remark-rehype'))
  .use(require('rehype-format'))
  .use(require('rehype-stringify'))
  .process(file, (err, file) => console.log(String(file)));
```

Using [mdx](https://mdxjs.com/):

```js
console.log(
  await require('@mdx-js/mdx')(src, {
    remarkPlugins: [
      [
        require('remark-heading-custom-ids'),
        {
          /* options */
        },
      ],
    ],
  }),
);
```
