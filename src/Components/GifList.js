import React from 'react'
import Gif from './Gif'

const GifList = (props) => {
	return (
		<div className="gif-container">
			{props.gifs.map(gif => {
				return <Gif gif={gif} />
			})}
		</div>
	)
}

export default GifList