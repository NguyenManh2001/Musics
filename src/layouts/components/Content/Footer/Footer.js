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
    PlayOnIcons,
    ValueOffIcons,
} from '~/Components/icons/icons';
import styles from './Footer.module.scss';
import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);

function Footer({ src, name, title, link , clickNext, clickPause }) {
    const videoRef = useRef();
    const [play, setPlay] = useState(false);
    const [start, setStart] = useState();
    const [value, setValue] = useState(0);
    const [volume,setVolume] = useState(50);
    const [muted,setMuted] = useState(false);
    const [active,setActive] = useState(false);
    const [linkIc,setLink] = useState(false);
    const [loop,setLoop] = useState(false);
    const [end, setEnd] = useState();
    const intervalRef = useRef();
 

    const handlePlay = () => {
        if (play) {
            videoRef.current.play();
            setPlay(!play);
        } else {
            videoRef.current.pause();
            setPlay(!play);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            const prosecc = Math.floor((videoRef.current.currentTime / videoRef.current.duration) * 100);
            setValue(prosecc);
        }, 500);
    });
    const change = (e) => {
     const seekTime =  videoRef.current.duration / 100 * e.target.value;
     videoRef.current.currentTime  = seekTime;
    }
    useEffect(() => {
        const audio = document.getElementById("audio-element");
  audio.addEventListener("ended", clickNext);
  return () => {
    audio.removeEventListener("ended", clickNext);
  };
    })
    // useEffect(() => {
    //     const audioTrack = audioTracks[0];
      
    //     if (audioTrack && mic) {
    //         audioTrack.attach(audioRef.current);
    //         return () => {
    //             audioTrack.detach();
    //         };
    //     }
    // }, [audioTracks, mic, guide]);
    const formatTime = (sec_num) => {
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - hours * 3600) / 60);
        let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

        hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logoMusic')}>
                    <img className={cx('Image')} src={src} />
                </div>
                <div className={cx('Music')}>
                    <NavLink className={cx('Link')} to="#">
                        {name}
                    </NavLink>
                    <div className={cx('title')}>
                        <NavLink className={cx('Link')} to="#">
                            {title}
                        </NavLink>
                    </div>
                </div>
                <div className={cx('Icon')}>
                    <button className={cx('btnIcon')}>
                        <LoveIcons className={cx('Iconss')}/>
                    </button>
                    <span className={cx('btn')}>
                        <button className={cx('btnIcon')}>
                            <BookIcons className={cx('Iconss')}/>
                        </button>
                    </span>
                </div>
                <div className={cx('content')}>
                    <div className={cx('contentItemTop')}>
                        <div className={cx('playLeft')}>
                            <button className={cx('Icons')} onClick={() => setLink(!linkIc)}>
                                <LinkIcons className={cx('Icons', {active: linkIc})} />
                            </button>
                            <button className={cx('Iconss')} onClick={clickPause} to="#">
                                <PauseIcons className={cx('Iconss')} />
                            </button>
                        </div>
                        <button className={cx('PlayIcon')} onClick={handlePlay} to="#">
                            {play ? <PlayOffIcons /> : <PlayOnIcons />}
                        </button>
                        <audio
                            id='audio-element'
                            autoPlay
                            loop={loop}
                            muted={muted}
                            ref={videoRef}
                            onTimeUpdate={() => {
                                setStart(formatTime(videoRef.current.currentTime));
                                setEnd(formatTime(videoRef.current.duration));
                            }}
                            onChange={(e) => {
                                change(e)
                            }}
                            src={link}
                        />
                        <div className={cx('playRight')}>
                            <button className={cx('Icons')} onClick={clickNext} to="#">
                                <NextIcons className={cx('Iconss')} />
                            </button>
                            <button className={cx('Icons')} to="#" onClick={() => {
                                setActive(!active);
                                setLoop(!loop);
                            }
                            }>
                                <BackIcons className={cx('Icons', {active: active})}/>
                            </button>
                        </div>
                    </div>
                    <div className={cx('contentItemBottom')}>
                        <div className={cx('startTime')}>{start}</div>
                        <input
                            className={cx('input')}
                            type="range"
                            ref={intervalRef}
                            value={value}
                            step="1"
                            min="0"
                            max="100"
                        />
                        <div className={cx('startTime')}>{end}</div>
                    </div>
                </div>
                <div className={cx('footer')}>
                    <button className={cx('btnFooter')} to="">
                        <MicroIcons className={cx('Iconss')}/>
                    </button>
                    <button className={cx('btnFooter')} to="">
                        <ListIcons className={cx('Iconss')}/>
                    </button>
                    <button className={cx('btnFooter')} to="">
                        <ContextIcons className={cx('Iconss')}/>
                    </button>
                    <button className={cx('btnFooter')} onClick={() => {
                        setMuted(!muted)
                    }}>
                        {muted ?(
                            <ValueOffIcons className={cx('Iconss')}/>
                        ):(
                            <ValueIcons className={cx('Iconss')}/>
                        )}
                    </button>
                
                </div>
            </div>
        </div>
    );
}
Footer.propTypes = {
    name: PropTypes.string,
};
export default Footer;
