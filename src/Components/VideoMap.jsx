import React, { useRef } from 'react';
import map from "../map.png"
import v from "../cmpustour.mp4"
const VideoMap = () => {
    const videoRef = useRef( null );

    const handleVideoEnded = () => {
        // Replay the video when it ends
        videoRef.current.play();
    };

    return (
        <div className='vandMap'>
            <video
                ref={videoRef}
                onEnded={handleVideoEnded}
                autoPlay
                muted
                loop
                style={{ width: '45%', height: '45' }}
            >
                <source src={v} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="map">
                <img src={map} alt="" />
            </div>
        </div>
    );
};

export default VideoMap;
