import React from 'react'

const Gif = (props) => {
	return(
		<div className="gif">
			<img src={props.gif} />
		</div>
	)
}

export default Gif