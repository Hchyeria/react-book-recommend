import actionData from './action'


export const generateId = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}


const reg = [/recommend/, /list/, /shop/]

export const getTab = (str) => {
	const len = reg.length
	for (let i = 0; i < len; ++i) {
		if (reg[i].test(str)) {
			return (i + 2) + ''
		}
	}
	return '1'
}


const pages = [/book/, /search/]
const actionPages = ['detail', 'search']
export const getPage = () => {
    const str = window.location.pathname
    const len = pages.length
	for (let i = 0; i < len; ++i) {
		if (pages[i].test(str)) {
			return actionPages[i]
		}
	}
	return 'home'
}


export const actionUpload = (item, action = 'click') => {
	const {
		bookId,
		tags = [],
    } = item
    if (!bookId) return
    const pageName = getPage()
	return () => {
		let data = {
			bookId,
			tagIds: tags.join('-'),
			action: action,
			page: `${pageName}-${bookId}`
		}

		for (let i = 0; i < 3; ++i) {
			if (!actionData[i]) {
				actionData[i] = data
				break
			}
		}
		
	}
}