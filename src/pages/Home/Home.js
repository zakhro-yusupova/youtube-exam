import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Card from "../../components/Card"
import Dollie from '../../assets/images/dollie.png';
import Food from '../../assets/images/food.png';
import SubscribeButton from '../../components/SubscribeButton';
import Nav from "../../components/Nav";
import useTheme from "../../components/Hook/useTheme";

import "../../assets/css/main.css";
import "./home.css";


const Home = () => {

  const [theme, setTheme] = useTheme();

	const [dollie, setDollie] = useState({ isFetched: false, data: {}, error: null, });

	const [recommended, setRecommended] = useState({ isFetched: false, data: {},	error: null, });

	const [food, setFood] = useState({ isFetched: false, data: {}, error: null,});

	useEffect(() => {
		axios
		.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
	.then(function (response) {
		setDollie({ isFetched: true, data: response.data, error: false,});
	})
	.catch(function (error) {
		setDollie({
			isFetched: true,
			data: null,
			error: error,
		});
	});

	axios
	.get('https://jsonplaceholder.typicode.com/photos?albumId=2')
.then(function (response) {
	setRecommended({
		isFetched: true,
		data: response.data,
		error: false,
	});
})
.catch(function (error) {
	setRecommended({
		isFetched: true,
		data: null,
		error: error,
	});
});

axios
.get('https://jsonplaceholder.typicode.com/photos?albumId=3')
.then(function (response) {
	setFood({
		isFetched: true,
		data: response.data,
		error: false,
	});
})
.catch(function (error) {
	setFood({
		isFetched: true,
		data: null,
		error: error,
	});
});
}, []);

return (

  <div className={theme === "dark" ? "dark-content" : "content-wrapper"}>

    <Nav/>

	<div className='main'>

<div className='chanel-inner'>

<div className='channel-info'>

<img className='channel-img'src={Dollie}	alt='channel image'	/>

<h2 className='chanel-name'>Dollie Blair</h2>

</div>

<div className='channel-video'>

{dollie.isFetched && dollie.data.splice(26, 10).map((item) => {

  return (

    <NavLink className="channel-link" key={item.id} to={`/video/${item.id}`}>

    <Card pics={`https://picsum.photos/id/${item.id}/250/150`} title={item.title.split(" ").slice(0 , 2).join(" ")}
		view={"80k views  ·  3 days ago"}/>

    </NavLink>
    );

  })}

  </div>

  </div>

  <h2 className='chanel-name'>Recommended</h2>

  <div className='channel-video'>

  {recommended.isFetched && recommended.data.splice(26, 10).map((item) => {

    return (

      <NavLink className="channel-link" key={item.id} to={`/video/${item.id}`}>

      <Card	pics={`https://picsum.photos/id/${item.id}/500/250`} title={item.title.split(" ").slice(0 , 3).join(" ")}
			view={"34k views  ·  5 months ago"} />

      </NavLink>
      );
    })}

    </div>

    <div className='channel-wrapper'>

    <div className='channel-inner'>

    <div className='channel-info'>

    <img className='channel-img'src={Food} alt='channel logo'/>

    <h2 className='channel-title'>Food and Drink</h2>

    </div>

   	<SubscribeButton/>

    </div>

    <div className='channel-video'>

    {food.isFetched &&	food.data.splice(8, 10).map((item) => {

      return (

        <NavLink className="channel-link" key={item.id} to={`/video/${item.id}`}>

        <Card	pics={`https://picsum.photos/id/${item.id}/250/150`} title={item.title.split(" ").slice(0 , 2).join(" ")}
				view={"240k views  ·  4 months ago"}/>
        </NavLink>
        );
      })}
      </div>

      </div>

      </div>

  </div>

				);
			};

  export default Home;