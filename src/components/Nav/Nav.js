import React from "react";
import {Home, Trending, Subscription, Library, History, WatchLater, Favourites, LikedVideos, Music, Games, ShowMore, SettingIcon} from "../../assets/images/Icons/Icons";
import Item from "../SubscriptionItem/SubscriptionItem";
import Gussie from "../../assets/images/gussie.png";
import Nora from "../../assets/images/nara.png";
import Belle from "../../assets/images/belle.png";
import Eunice from "../../assets/images/eunice.png";
import Emma from "../../assets/images/emma.png";
import Leah from "../../assets/images/leah.png";
import Food from "../../assets/images/food.png";
import Dollie from "../../assets/images/gussie.png";
import NavItem from "../NavItem/NavItem";
import Setting from "../Setting";

import "./nav.css";

let users = [
	{
		id: 1,
		avatar: Gussie,
		name: 'Gussie Singleton',
	},
	{
		id: 2,
		avatar: Nora,
		name: 'Nora Francis',
	},
	{
		id: 3,
		avatar: Belle,
		name: 'Belle Briggs',
	},
	{
		id: 4,
		avatar: Eunice,
		name: 'Eunice Cortez',
	},
	{
		id: 5,
		avatar: Emma,
		name: 'Emma Hanson',
	},
	{
		id: 6,
		avatar: Leah,
		name: 'Leah Berry',
	},
	{
		id: 7,
		avatar: Dollie,
		name: 'Dollie Blair',
	},
	{
		id: 8,
		avatar: Food,
		name: 'Food and Drink',
	},
];

function Nav  () {

	return (

		<nav className="nav-bar">

		<ul className="nav-bar__list">

		<NavItem  Icon={Home} title="Home" PathName={'/'}/>

		<NavItem Icon={Trending} title="Trending" PathName={'/'}/>

		<NavItem Icon={Subscription} title="Subscription" PathName={'/'}/>

		<NavItem Icon={Library} title={"Library"} PathName={'/'}/>

		<NavItem Icon={History} title="History" PathName={'/'}/>

		<NavItem Icon={WatchLater} title="WatchLater" PathName={'/'}/>

		<NavItem Icon={Favourites} title="Favourites" PathName={'/'}/>

		<NavItem Icon={LikedVideos} title="LikedVideos" PathName={'/'}/>

		<NavItem Icon={Music} title="Music" PathName={'/'}/>

		<NavItem Icon={Games} title="Games" PathName={'/'}/>

		<NavItem Icon={ShowMore} title="ShowMore" PathName={'/'}/>

		</ul>

		<strong className="subs">Subscriptions</strong>

		<ul className="channels">

		{users.map((item) => {

			return (
				<Item key={item.id} avatar={item.avatar} name={item.name} id={item.name} />
				);
			})}

			<li className="item">

			<NavItem Icon={SettingIcon} title="Setting" PathName={'/'}/>

			</li>

			</ul>

			</nav>
			)
		}

		export default Nav;