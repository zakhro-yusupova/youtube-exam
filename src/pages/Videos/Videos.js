import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { Dislike, Like, Share, More } from "../../assets/images/Icons/Icons";
import SubscribeButton from "../../components/SubscribeButton";
import RecommendedVideos from "../../components/RecommendedVideos/RecommendedVideos";
import Food from "../../assets/images/food.png";
import ProgressBar from "../../assets/images/progress-bar.png";
import useTheme from "../../components/Hook/useTheme";

import "./videos.css"
import "../../assets/css/main.css";
import "../Channel/channel.css";

const Videos = () => {

  const [theme, setTheme] = useTheme();

  const params = useParams();

  const [videos, setVideos] = useState({
    isFetched: false,
    data: {},
    error: null,
  })

  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/photos', {
    params: {
      id: params.id,
    },
  })
  .then(function (response) {
    setVideos({
      isFetched: true,
      data: response.data,
      error: false,
    })
  })
  .catch(function (error) {
    setVideos({
      isFetched: true,
      data: null,
      error: error,
    });
  });

}, [params]);

return (

  <div>
  {
    videos.isFetched ? (

      <div className={theme === "dark" ? "dark-content" : "content-wrapper"}>

      <div className="videos-inner">

      <img className="videos" src={`https://picsum.photos/id/${videos.data[0].id}/1000/500`}/>

      <img className="videos-procress-bar" src={ProgressBar}/>

      <h2 className="videos-title">{videos.data[0].title}</h2>

      <div className="avtivity-box">

      <span className="views-amount">123k views</span>

      <div className="avtivity-subbox">

      <Like/>

      <Dislike/>

      <Share/>

      <More/>

      </div>

      </div>

      <div className="channel-infos channel-wrap">

      <div className="info-wrapper channel-wrap">

      <img className="channel-avaatar" src={Food}/>

      <div className="channel-name-wrapper channel-wrap">

      <h2 className="channel-name">Food and Drink</h2>

      <span className="channel-subscribed-num">Published on 14 Jun 2019</span>

      <div className="channel-overview-wrapper">

      <p className="channel-overview">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>

      <span className="channel-show-more">Show more</span>

      </div>

      </div>

      </div>

      <div className="subscribe-info">

      <SubscribeButton/>

      </div>


      </div>


      </div>

      <RecommendedVideos/>

      </div>

      ):(
        <h2 className="loader">Looading</h2>
        )
      }
      </div>
      )
    }


    export default Videos;
