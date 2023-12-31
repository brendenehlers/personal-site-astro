import theme from '@/data/theme'
import { MAP_COLOR_VARIANT_TO_TEXT } from './types/tailwind'
import pkg from 'isomorphic-dompurify'
import { marked } from 'marked'
import type { RendererObject } from 'MarkedOptions'
import hljs from 'highlight.js/lib/common' 

export function convertAsteriskToStrongTag(str: string) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong class='font-normal ${
      MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary]
    }'>$1</strong>`
  )
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date)
}

export function removeTrailingSlash(pathname: string) {
  const matchTrailingSlash = /\w+\/$/
  if (matchTrailingSlash.test(pathname)) return pathname.slice(0, -1)
  return pathname
}

export function parseMarkdown(markdown: string) {
	if (markdown == null || markdown == '') return ''
	const { sanitize } = pkg

	// TODO implement copy button	
	const renderer: RendererObject = {
		code(code: string, infostring: string | undefined, escaped: boolean) {

			// get highlighted code
			let newCode = hljs.highlight(code, { language: infostring || 'plaintext' }).value

			// put code into one element so it's all on the same line
			newCode = newCode.split('\n').map((line) => (
				`<span>${line}</span>`					
			)).join('')

			return `<pre>${newCode}</pre>`
		}
	}

	marked.use({ renderer })

	return sanitize(marked.parse(markdown))
}

export function escapeHTML(html: string) {
	return html.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}