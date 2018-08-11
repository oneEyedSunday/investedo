import React from 'react'
import { Container, BrandedButton as BButton } from '../uielems'

export default class Frame4  extends React.Component{

	goBack = evt => this.props.actions.closeCurrentFrame()
	render(){
		return (
			<Container>
				<p>aajajajajajaaaah</p>
				<BButton onClick={this.goBack}>Back</BButton>
			</Container>
		)
	}
}

