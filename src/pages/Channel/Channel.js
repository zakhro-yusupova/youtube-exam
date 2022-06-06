import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import SubscribeButton from "../../components/SubscribeButton";
import { ChannelNoti, Search } from "../../assets/images/Icons/Icons";
import Item from "../../components/SubscriptionItem/SubscriptionItem";
import Card from "../../components/Card";
import ChannelImg from "../../assets/images/channel-top-img.png";
import Margaret from "../../assets/images/margaret.png";
import Flora from "../../assets/images/flora.png";
import Violet from "../../assets/images/violet.png";
import Phillip from "../../assets/images/phillip.png";
import useTheme from "../../components/Hook/useTheme";

import './channel.css';
import "../../assets/css/main.css";

const Channel = ({id}) =>{

  const [theme, setTheme] = useTheme();

  const params = useParams();

  const [data, setData] = useState({
    isFetched: false,
    data:{},
    error: null
  });

	const [video, setVideo] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  useEffect (() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`, {
      params: {
        id: (params.id -0),
      }
    })
    .then(function(response) {
      setData({
        isFetched:true,
        data:response.data,
        error:false

      })

    })
    .catch(function(error) {
      setData({
        isFetched:true,
        data:false,
        error:error
      })
    })


axios
.get('https://jsonplaceholder.typicode.com/photos', {
  params: {
    albumId: id,
  }
})
.then(function (response) {
	setVideo({
		isFetched: true,
		data: response.data,
		error: false,
	});
})
.catch(function (error) {
	setVideo({
		isFetched: true,
		data: null,
		error: error,
	});

});

}, [params]);



  return (

    <div className={theme === "dark" ? "dark-content" : "content-wrapper"}>

    <Nav/>

    <div className="channel-box">

    <img className="channel-top-img" src={ChannelImg}/>

    <div className="channel-infos">

    <div className="info-wrapper">

    <img className="channel-avaatar" src={Margaret}/>

    <div className="channel-name-wrapper">

    <h2 className="channel-name">{params.id}</h2>

    <span className="channel-subscribed-num">245K subscribed</span>

    </div>

    </div>

    <div className="subscribe-info">

    <ChannelNoti/>

    <SubscribeButton/>

    </div>

    </div>

    <div className="channel-subbox">

    <div>

    <ul className='channel-list'>

    <li className='channel-item' > <a className="channel-item-link actiive" href="#"> Home </a> </li>

    <li className='channel-item' > <a className="channel-item-link" href="#"> Videos </a> </li>

    <li className='channel-item' > <a className="channel-item-link" href="#"> Playlists </a> </li>

    <li className='channel-item' > <a className="channel-item-link" href="#"> Channels </a> </li>

    <li className='channel-item' > <a className="channel-item-link" href="#"> Discussion </a> </li>

    <li className='channel-item' > <a className="channel-item-link" href="#"> About </a> </li>

    <li className='channel-item' > <a className="channel-item-link" href="#"> <Search/> </a> </li>

    </ul>

    {
      data.isFetched ? (

        <NavLink to={`/video/${params.id}`} className="video-link">

          <div className="video-box">

            <img className="video" src={`https://picsum.photos/id/1002/480/250`} alt="user video" />

          </div>

        <div className="video-info" >

        <h3 className="video-title">Choosing The Best Audio Player Software For Your Computer</h3>

        <p className="video-text">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>

        <span className="video-view">11k views  ·  6 months ago</span>

        </div>

        </NavLink>)
        :(<h2 className="loader">Looading</h2>)
      }

      </div>

      <div className="recommended-channels">

      <h3 className="recom-title">Recommended channel</h3>

      <Item avatar={Flora} name="Flora Benson"/>

      <Item avatar={Violet} name="Violet Cobb"/>

      <Item avatar={Phillip} name="Phillip Mullins"/>

      </div>

      </div>

      <h2 className='margaret-videos'>{`${params.id} videos`}</h2>

         <div className='margaret-videos-wrapper'>

						{video.isFetched && video.data.splice(0, 9).map((item) => {

								return (

									<NavLink className="margaret-videos-link" key={item.id} to={`/video/${item.id}`}>

										<Card	pics={`https://picsum.photos/id/${item.id}/250/150`} title={item.title.split(" ").slice(0 , 2).join(" ")}

                    view={"240k views  ·  4 months ago"}/>

									</NavLink>
								);

							})}

					</div>

      </div>

      </div> )}

    export default Channel;