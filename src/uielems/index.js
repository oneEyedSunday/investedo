import styled from 'styled-components'

const Base = styled.div`
		height: 80vh;
		padding: 20px;
		margin: 10px;
		width: 100%;
`

export const StyledWrapper = Base.extend`
	color: palevioletred;
	background: papayawhip
`

export const BrandedButton = styled.button`
	color: ${props => props.btnColor || '#151562'};
	&:hover {
		color: ${props => props.btnHoverColor || '#333'}
	}
`

export const Carousel = Base.extend`
	background-image: url(${props => props.bgImgUrl});
	background-repeat: no-repeat;
	background-size: cover;
	display: ${props => props.active ? 'flex' : 'none'};
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`

export const InfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	color: ${props => props.txtColor}
`

export const Indicator = styled.span`
	cursor: pointer;
	display: ${props => props.visibility ? "block" : "none"}
`

export const ItemsContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`


export const ListItem = styled.div`
	&:hover {
		background-color: #efefef;
	}
	background-color: #9b9292;
	cursor: pointer;
	padding: 15%;
	transition: all 100ms ease-out
`


export const ListContainer = styled.div`
	background-color: #fff;
	color: #edd7d9;
	box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.3), inset 0px 4px 1px 1px white;
`

export const Container = styled.div`
	width: '50vw';
	height: 'auto';
	display: flex;
`