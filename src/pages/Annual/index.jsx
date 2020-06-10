import React, {
	useEffect,
	useState,
	useCallback,
	useMemo,
	memo,
	lazy,
	Suspense,
} from 'react'
import { observer } from 'mobx-react'
import Container from '../../utils/Container'
import './index.styl'

import getSummary from './apis/getSummary'
import Slides from './components/slides/Slides';
import Page from './components/page/Page';
import Header from './components/header/Header';
import Pages from './components/pages/Pages';

let _numOfAppRun = 1
const Annual = observer((props) => {

	const [isHeaderDataLoaded, setIsHeaderDataLoaded] = useState(false)
	const [menuItems, setMenuItems] = useState([])
	const [bgAudioList, setBgAudioList] = useState()
	useEffect(() => {
		//获取目录数据
		getHeaderData()
	}, [])

	function getHeaderData() {
		getSummary().then(res => {
			setMenuItems(res.widgetInfos)
			setBgAudioList(res.bgMusic)
			setIsHeaderDataLoaded(true)
		})
	}

	const [innerWidth, setInnerWidth] = useState(window.innerWidth)

	useEffect(() => {
		const updateWindowDimensions = () => {
			setInnerWidth(window.innerWidth)
		}
		window.addEventListener('resize', updateWindowDimensions)
		return () => {
			window.removeEventListener('resize', updateWindowDimensions)
		}
	})

	return (
		// <AppContext.Provider value={{ state, dispatch }} >

		<Container className="annual-container">
			{isHeaderDataLoaded ? (
				<Header
					innerWidth={innerWidth}
					height="40px"
					menu_infos={menuItems}
					bgAudioList={bgAudioList}
					// active_index={slidesRef.current.currentSlideIndex}
					// onMenuItemClick={MenuItemClickHandler}
				></Header>
			) : null}

			<Pages innerWidth={innerWidth} menuItems={menuItems}></Pages>
		</Container>
		// </AppContext.Provider>
	)
})

export default Annual
