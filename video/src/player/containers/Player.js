import React, { useState, useEffect } from 'react'
import { StyleSheet, ActivityIndicator, Text } from 'react-native'
import Video from 'react-native-video'

import Layout from '../components/Layout'
import PlayPause from '../components/PlayPause'
import ControlLayout from '../components/ControlLayout'
import ProgressBar from '../components/ProgressBar'
import FullScreem from '../components/FullScreem'

const Player = () => {
    const [loading, setLoading] = useState(true)
    const [paused, setPaused] = useState(false)
    const [fullScreem, setFullScreem] = useState(false)
    const [progress, setProgress] = useState({
        currentTime: 0,
        playableDuration: 0,
        seekableDuration: 0,
        videoProgress: 0
    })

    const onBuffer = ({ isBuffering }) => setLoading(isBuffering)

    const onLoad = () => setLoading(false)

    const playPause = () => setPaused(!paused)

    const onFullScreem = () => setFullScreem(!fullScreem)

    const onProgress = ({  currentTime, playableDuration, seekableDuration }) => {
        
        const videoProgress = (currentTime * 100) / playableDuration;
        setProgress({
            ...progress,
            videoProgress: videoProgress
        })
        if (videoProgress >= 99) {
            playPause()
            setProgress({
                ...progress,
                currentTime: 0,
                videoProgress: 0
            })
        }
    }

    return (
        <Layout
            loading={loading}
            video={
                <Video
                    source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
                    style={style.video}
                    resizeMode="contain"
                    onBuffer={onBuffer}
                    onLoad={onLoad}
                    paused={paused}
                    fullscreen={fullScreem}
                    fullscreenOrientation={fullScreem ? 'all' : 'portrait'}
                    onProgress={onProgress}
                />
            }
            loader={
                <ActivityIndicator color='white' />
            }
            controls={
                <ControlLayout>
                    <PlayPause onPress={playPause} pause={paused} />
                    <ProgressBar progress={progress.videoProgress}/>
                    <FullScreem fullScreem={onFullScreem} />
                </ControlLayout>
            }
        >
        </Layout>
    )
}
const style = StyleSheet.create({
    video: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
})

export default Player