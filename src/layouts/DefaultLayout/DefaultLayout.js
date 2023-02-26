import classNames from 'classnames/bind';
import Header from '~/layouts/components/header';
import Sibar from '~/layouts/components/Sibar';
import Content from '~/layouts/components/Content';
import styles from './DefaultLayout.module.scss';
import Footer from '~/layouts/components/Content/Footer';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('Sidebar')}>
                <Sibar />
            </div>
            <div className={cx('container')}>
              {children}
            </div>
            {/* <div className={cx('footer')}>
             <Footer />
            </div> */}
        </div>
    );
}

export default DefaultLayout;
