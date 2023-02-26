import classNames from "classnames/bind";
import { LogoIcons,HomeIcons, SearchIcons, AdminIcons } from "~/Components/icons/icons";
import styles from './header.module.scss';
import { NavLink } from "react-router-dom";
import config from "~/config";
const cx = classNames.bind(styles);
function Header() {
    return ( 
        <div className={cx('wrapper')}>
             <div className={cx('container')}>
               <div className={cx('logo')}><LogoIcons /></div>
               <div className={cx('headerContent')}>
               <div className={cx('home')}>
                <NavLink to={config.routers.Home} className={cx('logohome')}><HomeIcons/></NavLink>
                </div>
                <div className={cx('search')}>
                    <span className={cx('IconSearch')}><SearchIcons/></span>
                    <input type="text" placeholder="Bạn muốn nghe gì?" className={cx('input')} />
                </div>
               </div>
               <div className={cx('footer')}>
                <button className={cx('btnAdmin')}>
                    <div className={cx('admin')}>
                        <AdminIcons className={cx('IconAdmin')} />
                    </div>
                </button>
               </div>
             </div>
        </div>
     );
}

export default Header;