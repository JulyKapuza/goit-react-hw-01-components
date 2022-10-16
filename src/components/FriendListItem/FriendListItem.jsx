import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css"

export default function FriendListItem({ avatar, name, isOnline='true' }) {
        
    return <li className={css.friend_item}>
        {isOnline
            ? (<span className={css.online}>{isOnline }</span>)
            : (<span className={css.ofline}>{isOnline }</span>)}
        
  <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
</li>
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}