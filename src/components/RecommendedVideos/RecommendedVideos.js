import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AutoBlack, Autoplay } from "../../assets/images/Icons/Icons";
import Card from "../Card";

import "./recommended-videos.css"
import { NavLink } from "react-router-dom";

const RecommendedVideos = () => {

	const [data, setData] = useState({
		isFetched: false,
		data: {},
		error: null,
	});

	useEffect(() => {
		axios
		.get('https://jsonplaceholder.typicode.com/photos')
		.then(function (response) {
			setData({
				isFetched: true,
				data: response.data,
				error: false,
			});
		})
		.catch(function (error) {
			setData({
				isFetched: true,
				data: null,
				error: error,
			});
		});
	}, []);

	return(

		<>

		<div className="recom-videos-inner">

		<div className="recom-videos-subinner">

		<h2 className="recom-videos-title">Next</h2>

		<span className="recom-videos-autoplay">Autoplay</span>

		<Autoplay/>

		<AutoBlack/>
		</div>

		<div className="recom-auto-box">


		{data.isFetched && data.data.splice(0, 10).map((item) => {

			return (
				<div className="recom-video-link-box">

				<NavLink className="recom-video-link" key={item.id} to={`/video/${item.id}`}>

				<Card pics={`https://picsum.photos/id/${item.id}/370/200`} title={item.title.split(" ").slice(0 , 3).join(" ")} view={'123k views'}	/>

				</NavLink>
				</div>
				);
			})}
			</div>
			</div>
			</>
			)
		}


		export default RecommendedVideos;
