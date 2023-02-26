import classNames from 'classnames/bind';
import { useContext, useState, createContext } from 'react';
import { NavLink } from 'react-router-dom';
import AbumMusics from '~/Components/AbumMusic/AbumMusics';
import { PlayOffIcons } from '~/Components/icons/icons';
import Footer from './Footer/Footer';
import styles from './Content.module.scss';
import config from '~/config';
import Content1 from '../Content1';
import { PauseIcon,NextIcon } from '~/Components/icons/icons';
// import Musics from '~/Components/useContent/useContent';
const cx = classNames.bind(styles);

export const Musics = createContext();

function Content() {
    const [music, setMusic] = useState(true);
    const [count, setCount] = useState(1);
    const [songs, setSong] = useState([]);
    const [id, setId] = useState(1);
    const [abum,setAbum] = useState([]);
   
    const render = () => {
        return (songs.map((song) => {

            if (song.id === id) {       
                return (
                    <div key={song.id}>
                        <Footer name={song.name} src={song.imageUri} title={song.artists} clickPause={handlePause} clickNext={handleNext} link={song.uri} />
                    </div>
                );
            }
        }))
    };
    const handleSubmit=(idSong) => {
       setId(idSong );
    }
    const handleNext = () => {
        setId(id + 1);
    };
    const handlePause = () => {
        setId(id - 1);
    };
    return (
        <Musics.Provider value={{songs,handleSubmit,handleNext,abum,id}}>
            <div className={cx('wrapperC')}>
                <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <button className={cx('PauseHeader')} onClick={() =>{
                        setMusic(true)
                    }}>
                        <PauseIcon />
                    </button>
                    <button className={cx('NextHeader')} onClick={() =>{
                        setMusic(false)
                    }}>
                        <NextIcon />
                    </button>
                </div>
                    {music ? (
                    <div className={cx('container')}>
                        {AbumMusics.map((AbumMusic, index) => (
                            <div key={AbumMusic.id} className={cx('Content')}>
                                <div className={cx('headerTitle')}>
                                    <h2 className={cx('title')}>{AbumMusic.title}</h2>
                                    <NavLink className={cx('link1')} to="">
                                        Xem tất cả
                                    </NavLink>
                                </div>
                                <div className={cx('menu')}>
                                    {AbumMusic.albums.map((album) => (
                                        <div key={album.id} className={cx('MenuItem')}>
                                            <div className={cx('MenuTitle')}>
                                                <div className={cx('logo')}>
                                                    <img className={cx('Image')} src={album.imageUri} />
                                                    <div className={cx('icon')}>
                                                        <button
                                                            className={cx('btnIcon')}
                                                            onClick={() => {
                                                                setCount(album.id)
                                                                setSong(album.songs)
                                                                setId(1)
                                                                // setMusic(!music)
                                                            }}
                                                        >
                                                            <PlayOffIcons />
                                                        </button>
                                                    </div>
                                                </div>
                                                <NavLink className={cx('link')} to="#"  onClick={() => {
                                                      setCount(album.id)
                                                      setSong(album.songs)
                                                      setId(1)
                                                      setAbum(album)
                                                      setMusic(!music)
                                                }}>
                                                    <div className={cx('TitleName')}>{album.name}</div>
                                                    <div className={cx('Title')}>{album.artists}</div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className={cx('footer')}><hr className={cx('footerborder')}></hr></div>
                        {/* <>{render()}</> */}
                    </div>
                      ):(
                    <Content1 />
                      )}
                </div>
                <div className={cx('render')}>{render()}</div>
            </div>
        </Musics.Provider>
    );
}

export default Content;
