import classNames from 'classnames/bind';
import { useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { BachamIcons, LoveIcons, LoveIcons1, PlayOffIcon, PlayOffIcons, PlayOnIcon, TimeIcons } from '~/Components/icons/icons';
import { Musics } from '../Content/Content';
import styles from './Content1.module.scss';
import axios from 'axios';
const cx = classNames.bind(styles);

function Content1() {
    const {songs,handleSubmit,abum,id} = useContext(Musics);
    const [idSong,setIdSong]=useState(1);
    const [playOff,setPlayOff] = useState(true);
    const [music,setMusic] = useState(null);

    const handle = (idSong) => {
     setIdSong(idSong);
     handleSubmit(idSong);
    }
//   useEffect(() => {

//   })
    // axios.get("http://localhost:4000/song")
    //       .then(res => {
    //        setMusic(res.data);
    //       }, err => {
    //         console.log(err)
    //       });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('Header')}>
                    <div className={cx('Header-left')}>
                        <div className={cx('header_logo')}>
                            <img className={cx('logo')} src={abum.imageUri} />
                        </div>
                    </div>
                    <div className={cx('Header-right')}>
                        <h2 className={cx('title')}>Playlist</h2>
                        <h1 className={cx('title')}>{abum.name}</h1>
                        <h2 className={cx('title1')}>
                           {abum.artists}
                        </h2>
                        <div className={cx('Right-bottom')}>
                            <a className={cx('link')} src="#">
                                Spotify,
                            </a>
                            <span className={cx('title')}>11.852 lượt thích </span>
                            <span className={cx('title')}>50 bài hát,{abum.time}, </span>
                            <span className={cx('title')}>7 bản nhạc mới</span>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    {/* <div className={cx('contentHeader')}>
                        <button className={cx('PlayIcon')} to="#">
                            <PlayOffIcons />
                        </button>
                        <div className={cx('IconLove')}>
                            <LoveIcons1 />
                        </div>
                        <div className={cx('IconLove')}>
                            <BachamIcons />
                        </div>
                    </div> */}
                    <div className={cx('table')}>
                        <div className={cx('id')}>#</div>
                        <div className={cx('name')}>tiêu đề</div>
                        <div className={cx('number')}>số lượt phát</div>
                        <div className={cx('abum')}>album</div>
                        <div className={cx('time')}>
                            <TimeIcons />
                        </div>
                    </div>
                    <div className={cx('border')}></div>
                        {songs.map((song) => (
                    <div key={song.id} className={cx(`tableItem`,id === song.id && `active`)} onClick={() => {
                        handle(song.id);
                        setPlayOff(false);
                        }}>
                        <div className={cx('IdMusic')}><span className={cx('Id')}>{song.id}</span>
                        <span className={cx('MusicPlayOff')}><PlayOffIcon /></span>
                        <span className={cx('MusicPlay')}><PlayOnIcon /></span>
                        </div>
                        <div className={cx('MusicName')}>
                            <img className={cx('logoMusic')} src={song.imageUri} />
                            <div className={cx('MusicItem')}>
                                <div className={cx('Music')}>{song.name}</div>
                                <div className={cx('Name')}>{song. artists}</div>
                            </div>
                        </div>
                        <div className={cx('MusicNumber')}>1.284.356</div>
                        <div className={cx('MusicAbum')}>Prool</div>
                        <div className={cx('MusicTime')}>
                        <div className={cx('MusicLove')}><LoveIcons /></div>
                           <span className={cx('Time')}>2:44</span>
                           <div className={cx('Musicba')}><BachamIcons /></div>
                        </div>
                    </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Content1;
