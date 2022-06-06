import { NavLink } from "react-router-dom";
import "./item.css";

const Item = ({avatar, name, id } ) => {

  return (
    <NavLink className="subs-item" to={`/chanel/${id}`}>

    <img className="img" src={avatar}/>

    <h3 className="title">{name}</h3>

    </NavLink>

  )
}

export default Item;