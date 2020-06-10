import { hotAuthorAndBook, hotTagAndBook } from '../../../apis/annual/hotRank'
import Summary from '../stores/summary'

const bgMusic =
	'[\n    {\n        "name": "The Armstrongs - Justin Hurwitz",\n        "url": "https://mr3.doubanio.com/2648b1b518bbcdbe36834ed11e0d3a5f/0/fm/song/p2937377_128k.mp4"\n    },\n    {\n        "name": "Buckskin Stallion Blues - Amy Annelle",\n        "url": "https://mr3.doubanio.com/cdc0f203b6d5da78025a9b21117e9382/0/fm/song/p2937378_128k.mp4"\n    },\n    {\n        "name": "Can\'t Help Falling in Love - Kina Grannis",\n        "url": "https://mr1.doubanio.com/3a35d7ad1eba6c8628af851be31f434c/0/fm/song/p2937380_128k.mp4"\n    },\n    {\n        "name": "These Days - Taylor Goldsmith",\n        "url": "https://mr3.doubanio.com/5935fbae04230997413e927bae8185fa/0/fm/song/p2937379_128k.mp4"\n    }\n]'

export default () => {
	
	return Promise.all(
		[
			hotAuthorAndBook(), 
			hotTagAndBook()
		]).then(
		([
			hotAuthorAndBookData, 
			hotTagAndBookData
		]) => {
			let newHotAuthor = hotAuthorAndBookData
				.slice(0, 5)
				.map((ele) => ele.authorName)
			let newHotTag = hotTagAndBookData.slice(0, 5).map((ele) => ele.tagName)
			const newData = [newHotAuthor, newHotTag];
			[5, 12].forEach((offset, num) => {
				newData[num].forEach((name, index) => {
					if (index > 2) ++index
					Summary.widgetInfos[offset + index].title = name
				})
			})
			return {
				bgMusic,
				widgetInfos: Summary.widgetInfos,
			}
		}
	)
}
