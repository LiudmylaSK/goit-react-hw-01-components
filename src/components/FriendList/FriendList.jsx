import css from '../FriendList/FriendList.module.css'


export const FriendList = ({ friends }) => {
    return (
        <ul className = {css.friendList}>
        {
            friends.map(({ id, isOnline, avatar, name }) => {
                return (
                    <li key={id} className={css.item}>
                        <span
                           
                            className={isOnline ? css.statusOnline : css.statusOffline}>
                        </span>
                        <img className={css.avatar} src={avatar} alt={name} width="48" />
                        <p className={css.name}>{name}</p>
                    </li>
                );
            })
        }
        </ul >
    );
};