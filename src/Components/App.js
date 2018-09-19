import React, { Component } from 'react'
import axios from 'axios'
import Buttons from './Buttons'
import GifList from './GifList'


const api_key = 'Y4E0Lj8wFbU8gT8srw3Bc1BkU9Vaxl9n'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchInput:'',
			gifs:[]
		}
	}

	handleChange = (event) => {
		this.setState({searchInput:event.target.value})
	}

	handleSearch = () => {
		if(this.state.searchInput.length !== 0){
			const search = this.state.searchInput;
			
			axios.get(`http://api.giphy.com/v1/gifs/search?q={${search}}&api_key=${api_key}&limit=20`)
			.then(response => {
				const gifs = response.data.data.map(gif => {
					return gif.images.fixed_height.url;
				})
				this.setState({gifs:gifs, searchInput:''})
			})
			.catch(error => {
				console.log(error)
			})
		}
	}

	trendingSearch = () => {
		axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=20`)
		.then(response => {
			const trendingGif = response.data.data.map(gif => {
				return gif.images.fixed_height.url;
			})
			this.setState({gifs:trendingGif})
		})
		.catch(error => {
			console.log(error)
		})
	}

	randomSearch = () => {
		const randomGif = []
		axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}&limit=20`)
		.then(response => {
			randomGif[0] = response.data.data.images.fixed_height.url;
			this.setState({gifs:randomGif})
		})
		.catch(error => {
			console.log(error)
		})
	}

	clearGifs = () => {
		this.setState({gifs:[]})
	}
	

	render(){
		return(
			<div className="container">
				<h1>Explore the world of <a href="https://gipphy.com">Giffy</a></h1>
				<Buttons 
					handleSearch={this.handleSearch} 
					handleChange={this.handleChange} 
					trendingSearch={this.trendingSearch}
					randomSearch={this.randomSearch}
					clearGifs={this.clearGifs}
					value={this.state.searchInput}
				/>
				<GifList gifs={this.state.gifs}/>
			</div>
		)
	}
}

export default App