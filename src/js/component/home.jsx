import React, { useRef, useState, useEffect } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const url = "https://assets.breatheco.de/apis/sound/";
	const songs = [
		{
			id: 0,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 1,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		}
	];

	const [current, setCurrent] = useState(0);
	const mp3Player = useRef(null);

	useEffect(() => {
		mp3Player.current = new Audio();
	}, []);
	const loadSong = (index) => {
		setCurrent(index);
		mp3Player.current.src = url + songs[current].url;
		mp3Player.current.play();
	};

	const isPause = () => {
		return mp3Player.current.pause();
	}
	const isback = () => {
		return loadSong(current > 0 ? current - 1 : songs.length - 1)
	}
	const isNext = () => {
		return loadSong(current >= songs.length - 1 ? 0 : current + 1)
	}
	console.log(current)

	return (
		<div className="container">
			<div className="playlist">
				<ul>
					{songs.map((song, id) => (
						<li key={id}>
							{id === current && "(Listening to)"} {song.name}
						</li>
					))}
				</ul>
			</div>
			<div className="interactions ">
				<button className="btn btn-outline-secondary " id="#backward" onClick={() => isback()}><i className="fa-solid fa-backward-step"></i></button>
				<button className={`btn btn-outline-secondary `} id="#play" onClick={() => loadSong(current)}><i className="fa-solid fa-play"></i></button>
				<button className={`btn btn-outline-secondary `} id="#pause" onClick={() => isPause()}><i className="fa-solid fa-pause"></i></button>
				<button className="btn btn-outline-secondary " id="#forward" onClick={() => isNext()}><i className="fa-solid fa-forward-step"></i></button>
				{/* <button className="btn btn-outline-secondary " id="#repeat"><i className="fa-solid fa-repeat"></i></button> */}
			</div>

		</div>
	);
};

export default Home;
