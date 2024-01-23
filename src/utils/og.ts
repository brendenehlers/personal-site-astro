import { JSDOM } from 'jsdom'

// reads the head of a html document
// uses a stream and returns early once we encounter the `</head>` tag
const getHead = async (url: string) => {
	let error: any
	const data = await fetch(url)
		.then((res) => {
			if (!res.body) return null
			const reader = res.body?.getReader()
			return new ReadableStream({
				start(controller) {
					const pump = (): any => {
						return reader?.read().then(({ done, value }) => {
							if (done) {
								controller.close()
								return
							}

							const string = new TextDecoder('utf-8').decode(value)
							// return early when we have the head
							if (string.match(/<\/head>/)) {
								controller.enqueue(value)
								controller.close()
							}

							controller.enqueue(value)
							return pump()
						})
					}
					return pump()
				},
			})
		})
		.then((stream) => new Response(stream))
		.then((response) => response.text())
		.catch((err) => {
			console.error('Something went wrong')
			if (err instanceof Error) {
				console.log(err.message)
				error = err
			}
		})

	if (error instanceof Error) throw error

	return data
}

export const og = async (url: string) => {
	const html = await getHead(url)
	if (!html) return null
	const doc = new JSDOM(html)
	const head = doc.window.document.querySelector('head')
	if (!head) return null

	const ogType = head
		.querySelector('meta[property="og:type"]')
		?.getAttribute('content')

	const ogImage = head
		.querySelector('meta[property="og:image"]')
		?.getAttribute('content')

	let ogImageUrl
	if (ogImage && ogImage?.match(/^https?:\/\//)) ogImageUrl = ogImage
	else if (ogImage) ogImageUrl = url + ogImage

	const ogTitle = head
		.querySelector('meta[property="og:title"]')
		?.getAttribute('content')

	const canonical = head
		.querySelector('link[rel="canonical"]')
		?.getAttribute('href')

	return {
		type: ogType ? ogType : undefined,
		imageUrl: ogImageUrl ? ogImageUrl : undefined,
		title: ogTitle ? ogTitle : undefined,
		canonical: canonical ? canonical : undefined,
	}
}
