import React from 'react'
import {ListItem, ListContainer, Container} from '../uielems'


const DATA = [
	{
		title: "Investment Opportunities",
		component: "Opportunities"
	},
	{
		title: "Latest News"
	},
	{
		title: "Facts and Figures"
	},
	{title: "Publications and Downloads"},
	{title: "Media & Gallery"}
]


// hook up onClick events to show next phase

export default class FrameX extends React.Component {
	constructor(props){
		super(props)
	}
	/*
		avail props
		isActive
		actions:{
			setNextFrame,
			getNextFrame,
			replaceFrame,
			closeFrame,
			closeCurrentFrame,
			getCurrentFrame,
			setCurrentFrame
		}
	*/

	// 
	goBack = evt => this.props.actions.closeCurrentFrame() // from lib

	// what happens when you come back?
	// setCurrentFrame()

	// setNextFrame()

	// openMap

	loadLink = (index, link) => {
		const {actions: {setCurrentFrame, getCurrentFrame, setNextFrame}} = this.props

		// shorter names, so no this.props.actions.XXX

		setCurrentFrame({
			...getCurrentFrame().state,
			scrollToIndex: index
		})

		setNextFrame(DATA[index].component)
	}


	renderItem  = (index, nextFrame) => {
		const {scrollToIndex} = this.props
		const item = DATA[index]
		const isActive = scrollToIndex === index

		if(isActive){
			// style = {...style, ...{background: '#efefef'}}
		}
		// console.log('nextFrame', nextFrame)

		return (
			<ListItem onClick={evt => {this.loadLink(index, item)}} key={index}>{item.title}</ListItem>
		)

	}

	render(){

		const nextFrame = this.props.actions.getNextFrame()
		return (
			<Container>
				<ListContainer>
					{ DATA.map((d, index) => this.renderItem(index,nextFrame )) }
				</ListContainer>
			</Container>
		)
	}
}

