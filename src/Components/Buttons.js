import React from 'react'


const Buttons = ({handleSearch, handleChange, value, trendingSearch, randomSearch, clearGifs}) => {
	return(
		<div>
			<div className="search">
				<input type="search" name="search" placeholder="example:- Cat" value={value} onChange={handleChange}/>
				<button onClick={handleSearch}>Search</button>
			</div>
			<div className="buttons">
				<button onClick={trendingSearch}>Trending</button>
				<button onClick={randomSearch}>Random</button>
				<button onClick={clearGifs} className="clear">Clear</button>
			</div>
		</div>
	)
}

export default Buttons