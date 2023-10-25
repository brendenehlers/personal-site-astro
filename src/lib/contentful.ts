import contentful, { EntryFieldTypes } from "contentful"
import { BLOCKS } from '@contentful/rich-text-types'
import type { Block, Inline } from "@contentful/rich-text-types"
import type { Next } from "@contentful/rich-text-html-renderer"

export type References = {
  references: Reference[]
}

export type Reference = {
  name: string
  link: string
}

export interface BlogPost {
  contentTypeId: "blogPost",
  fields: {
    title: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText,
    date: EntryFieldTypes.Date,
    description: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text
    references: EntryFieldTypes.Object<References>
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
})