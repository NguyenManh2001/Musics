import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import {
    BackIcons,
    BookIcons,
    ContextIcons,
    LinkIcons,
    ListIcons,
    LoveIcons,
    MicroIcons,
    NextIcons,
    PauseIcons,
    PlayOffIcons,
    ValueIcons,
} from '~/Components/icons/icons';
const cx = classNames.bind(styles);

function FooterItem({ children}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('Icon')}>
                <button className={cx('btnIcon')}>
                    <LoveIcons className={cx('LoveIcon')} />
                </button>
                <span className={cx('btn')}>
                    <button className={cx('btnIcon')}>
                        <BookIcons />
                    </button>
                </span>
            </div>
            <div className={cx('content')}>
                <div className={cx('contentItemTop')}>
                    <div className={cx('playLeft')}>
                        <button className={cx('Icons')} to="#">
                            <LinkIcons />
                        </button>
                        <button className={cx('Iconss')} to="#">
                            <PauseIcons className={cx('Iconss')} />
                        </button>
                    </div>
                    <button className={cx('PlayIcon')} to="#">
                        <PlayOffIcons />
                    </button>
                    <div className={cx('playRight')}>
                        <button className={cx('Icons')} to="#">
                            <NextIcons />
                        </button>
                        <button className={cx('Icons')} to="#">
                            <BackIcons />
                        </button>
                    </div>
                </div>
                <div className={cx('contentItemBottom')}>
                    <div className={cx('startTime')}>0:00</div>
                    <input className={cx('input')} type="range" />
                    <div className={cx('startTime')}>0:00</div>
                </div>
            </div>
            <div className={cx('footer')}>
                <button className={cx('btnFooter')} to="">
                    <MicroIcons />
                </button>
                <button className={cx('btnFooter')} to="">
                    <ListIcons />
                </button>
                <button className={cx('btnFooter')} to="">
                    <ContextIcons />
                </button>
                <button className={cx('btnFooter')} to="">
                    <ValueIcons />
                </button>
                <input className={cx('valueInput')} type="range" />
            </div>
        </div>
    );
}
export default FooterItem;
