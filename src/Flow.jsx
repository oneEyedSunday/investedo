import React, {Component} from 'react'
import {PortalWithState} from 'react-portal'

import MyMagicHatContainer from 'react-magic-hat'
import { ItemsContainer } from './uielems'
import Components from './components'
import Home from './components/Home'


export default class FullApp extends Component {
	state = {
		isAnimating: false,
		isOpen: false
	}
	// passes props to current componnet
	renderFrame = ({id, page, activePage, state, actions}) => {
		let extraProps = {
			isActive: activePage === page,
			isAnimating: this.state.isAnimating
		}

		console.log(id)

		const Page = id ? Components[id] : Components.Test

		return <Page {...extraProps} {...state} actions={actions} />
	}

	render(){
		return (
			<PortalWithState closeOnEsc>
				{
					({openPortal, closePortal, isOpen, portal}) => {
						// start anim
						const handleOpenPortal = cb => {
							this.setState({isOpen: true})
							setTimeout(openPortal, 300)
						}
						const onStartAnimation = frames => {
							this.setState({isAnimating: true})
						}
						const onEndAnimation = frames => {}
						// returning 2 elems
						// instead of absolute positioning
						return [
							<Home key="landingpage" showCase={handleOpenPortal} isOpen={this.state.isOpen} />,
							portal(
								// its not inside App container, y width is misbehaving
								<ItemsContainer>
									<MyMagicHatContainer renderFrame={this.renderFrame} onStartAnimation={onStartAnimation} onEndAnimation={onEndAnimation} />
								</ItemsContainer>
								)
						]
					}
				}
			</PortalWithState>
		)
	}


}