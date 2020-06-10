import actionData from './action'


export const generateId = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}


const reg = [/recommend/, /annual/, /shop/]

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


// https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
//If you write your own code, remember hex color shortcuts (eg., #fff, #000)
export const hexToRgbA = (hex, alpha) => {
	// 添加个alpha参数
	let alp = Number(alpha);
	if (isNaN(alp)) throw new Error("alpha should be a number!")
  
	var c;
	if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
		c= hex.substring(1).split('');
		if(c.length === 3){
			c= [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c= '0x'+c.join('');
		return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+`,${alp})`;
	}
	throw new Error('Bad Hex');
  }
  
  // hexToRgbA('#fbafff')
  
  /*  returned value: (String)
  rgba(251,175,255,1)
  */