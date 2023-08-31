import contentful, { EntryFieldTypes } from "contentful"
import { BLOCKS } from '@contentful/rich-text-types'
import type { Block, Inline } from "@contentful/rich-text-types"
import type { Next } from "@contentful/rich-text-html-renderer"

export interface BlogPost {
  contentTypeId: "blogPost",
  fields: {
    title: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText,
    date: EntryFieldTypes.Date,
    description: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
})

// export const richTextOptions = {
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node:  Block | Inline, next: Next) =>
//       `<p class="m-0 mb-3">${next(node.content)}</p>`,
//     [BLOCKS.HEADING_1]: (node:  Block | Inline, next: Next) =>
//       `<h1 class="text-3xl font-bold m-0 mb-3">${next(node.content)}</h1>`,
//     [BLOCKS.HEADING_2]: (node:  Block | Inline, next: Next) =>
//       `<h2 class="text-2xl font-bold m-0 mb-3">${next(node.content)}</h2>`,
//     [BLOCKS.HEADING_3]: (node:  Block | Inline, next: Next) =>
//       `<h3 class="text-1xl font-bold m-0 mb-3">${next(node.content)}</h3>`,
//     [BLOCKS.HEADING_4]: (node:  Block | Inline, next: Next) =>
//       `<h4 class="text-xl font-bold m-0 mb-3">${next(node.content)}</h4>`,
//     [BLOCKS.HEADING_5]: (node:  Block | Inline, next: Next) =>
//       `<h5 class="text-lg font-bold m-0 mb-3">${next(node.content)}</h5>`,
//     [BLOCKS.HEADING_6]: (node:  Block | Inline, next: Next) =>
//       `<h6 class="text-base font-bold m-0 mb-3">${next(node.content)}</h6>`,
//   },
// };