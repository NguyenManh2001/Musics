import {forwardRef,useImperativeHandle,useRef} from 'react'
import video1 from '~/videos/Video.mp4'
import classNames from 'classnames/bind'
import styles from './video.module.scss'

const cx = classNames.bind(styles);

const VIDEOS = [
    {
        id: 1,
        video: require("~/videos/Video.mp4"),

    },
    {
        id: 2,
        video: require("~/videos/Video.mp4"),

    },
    {
        id: 3,
        video: require("~/videos/Video.mp4"),
    },
]
function Video(props,ref){
    const videoRef = useRef()

    useImperativeHandle(ref,() => ({
           play() {
               videoRef.current.play()
           },
           pause() {
            videoRef.current.pause()
           }
    }))
         return (
             <div> 
                {VIDEOS.map((VIDEO) => (
                 <video
                 ref={videoRef}
                 src={VIDEO.video} 
                className={cx('Video')}
                 />
                ))}
             </div>
         )
}
export default forwardRef(Video)