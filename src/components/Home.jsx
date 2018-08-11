import React from 'react'
import { BrandedButton as BButton, Carousel, InfoDiv, Indicator } from '../uielems'

export default class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			currentImg: 0,
			leftCursorShow: 0,
			rightCursorShow: 1
		}
		// setInterval(this.setBG, 9000)
	}


	images = [
		require('../assets/ggoandphillip.jpg'),
		require('../assets/innovate.jpg'),
		require('../assets/bip.jpg')
	]

	IMAGESIZE = this.images.length

	setBG = dir => {
		let newImg = 0;
		if (dir !== undefined){
			// from indicator
			if(dir === "+"){
				newImg = this.state.currentImg + 1;
			} else if (dir === "-") {
				newImg = this.state.currentImg - 1;
			}
		}else {
			// auto scroll
			// newImg = 0
			// handle resetting timeout time
			// perhaps clear then restart interval
		}
		// set currentImg
		this.setState({
			currentImg: newImg
		}, () => {
			// set flags
			if(this.state.currentImg === 0) this.setState({leftCursorShow: 0, rightCursorShow: 1})
			else if (this.state.currentImg === this.IMAGESIZE - 1) this.setState({ leftCursorShow: 1, rightCursorShow: 0})
			else this.setState({leftCursorShow: 1, rightCursorShow: 1})
		})			
	}
	getBG = () => {
		return this.images[this.state.currentImg];
	}


	render(){
		return (
			<Carousel bgImgUrl={this.getBG} active={!this.props.isOpen}>
				<Indicator onClick={() => {this.setBG("-")}} visibility={this.state.leftCursorShow}><i>L</i></Indicator>
				<InfoDiv txtColor="#fff">
					<span>Invest Edo</span>
					<span>Nigeria's Best kept Secret</span>
					<BButton btnColor="3ff337" btnHoverColor="#127272" onClick={this.props.showCase}>Learn More</BButton>
				</InfoDiv>
				<Indicator onClick={() => {this.setBG("+")}} visibility={this.state.rightCursorShow}><i>R</i></Indicator>
			</Carousel>
		)
	}
}