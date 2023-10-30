import theme from '@/data/theme'
import { MAP_COLOR_VARIANT_TO_TEXT } from './types/tailwind'
import { sanitize } from 'isomorphic-dompurify'
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
  return new Intl.DateTimeFormat('en-US').format(date)
}

export function removeTrailingSlash(pathname: string) {
  const matchTrailingSlash = /\w+\/$/
  if (matchTrailingSlash.test(pathname)) return pathname.slice(0, -1)
  return pathname
}

export function parseMarkdown(markdown: string) {
	if (markdown == null || markdown == '') return ''

	// TODO implement copy button	
	const renderer: RendererObject = {
		code(code: string, infostring: string | undefined, escaped: boolean) {

			let newCode = code
			if (infostring) {
				newCode = hljs.highlightAuto(newCode).value
			} else {
				newCode = hljs.highlight(newCode, {language: 'plaintext'}).value
			}

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