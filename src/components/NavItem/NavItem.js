import { NavLink } from 'react-router-dom';

import "./nav-item.css";


const  NavItem = ({ PathName, Icon, title }) => {
	return (

			<NavLink className="nav-bar__item" to={PathName}>
				<Icon />
				<p className='nav-bar__title'>{title}</p>
			</NavLink>
	);
}
export default NavItem;
