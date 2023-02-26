import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { AddIcons, DowloadIcons, LibaryIcons, LikeIcons } from "~/Components/icons/icons";
import styles from "./Sibar.module.scss";


const cx = classNames.bind(styles);

function Sibar({name}) {
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
            <div className={cx('content')}>
                    <NavLink to="#" className={cx('menu')} >
                    <div className={cx('menuLogo1')}> 
                    <LibaryIcons />
                    </div>
                     <span className={cx('menuItem')}>Thư viện</span>
                    </NavLink>
                    <NavLink to="#" className={cx('menu')} >
                    <div className={cx('menuLogo2')}> 
                    <AddIcons />
                    </div>
                     <span className={cx('menuItem')}>Tạo playlist</span>
                    </NavLink>
                    <NavLink to="#" className={cx('menu')} >
                    <div className={cx('menuLogo3')}> 
                    <LikeIcons/>
                    </div>
                     <span className={cx('menuItem')}>Bài hát đã thích</span>
                    </NavLink>
                   <div className={cx('Line')}><hr className={cx('line')}></hr></div>
                   </div>
                   <NavLink to="#" className={cx('menu')} >
                    <div className={cx('menuLogo4')}> 
                    <DowloadIcons/>
                    </div>
                     <span className={cx('menuItem')}>Cài đặt Ứng dụng</span>
                    </NavLink>
                </div>
                
            </div>
    );
}

export default Sibar;