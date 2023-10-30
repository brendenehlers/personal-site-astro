import contentful, { EntryFieldTypes } from "contentful"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { MARKS } from "@contentful/rich-text-types"

import type { Document } from "@contentful/rich-text-types"
import type { Options } from "@contentful/rich-text-html-renderer"

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
    postContent: EntryFieldTypes.Text
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
})

export const documentToHtmlStringWithOptions = (richTextDocument: Document): String => {

  const options: Partial<Options> = {
    renderMark: {
      [MARKS.CODE]: (text) => {
        return `<code>${text}</code>`
      }
    }
  }

  return documentToHtmlString(richTextDocument, options)
}