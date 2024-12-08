import {useTrack} from "../../context/TrackContext.tsx";
import {useEffect, useState} from "react";
import {Box, IconButton, Slider, Typography} from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";


// Playing Gif
// https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif
const playingGif = "https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif";

const NowPlayingBar = () => {
    const {trackSrc} = useTrack();
    const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(0.2); // 音量状态，初始为最大音量

    useEffect(() => {
        if (trackSrc) {
            const audio = new Audio(trackSrc);
            setAudioElement(audio);
            audio.addEventListener("play", () => setIsPlaying(true))
            audio.addEventListener("pause", () => setIsPlaying(false))
            audio.volume = volume; // 设置音量

            return () => {
                audio.addEventListener("play", () => setIsPlaying(true))
                audio.addEventListener("pause", () => setIsPlaying(false))
            }
        }
    }, [trackSrc]);
    useEffect(() => {
        // 如果音频元素存在，更新音量
        if (audioElement) {
            audioElement.volume = volume;
        }
    }, [volume, audioElement]); // 当音量或音频元素更新时，更新音量

    const handlePlayPause = () => {
        if (audioElement) {
            console.log("play pause");
            if (isPlaying) {
                audioElement.pause();
            } else {
                audioElement.play();
            }
        }
    };
    const handleVolumeChange = (_event: Event, newValue: number | number[]) => {
        if (typeof newValue === "number") {
            setVolume(newValue / 100); // 设置音量，转换为 0 到 1 之间的值
        }
    };
    return (
        <Box sx={{position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "#333", p: 2}}>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h6" color="white">
                        Now Playing
                    </Typography>
                    <Box sx={{ml: 2}}>
                        {isPlaying && (
                            <img src={playingGif} alt="playing" width={40} height={20}/>
                        )}
                    </Box>
                </Box>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <IconButton onClick={handlePlayPause} color="primary">
                        {isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
                    </IconButton>
                    <Slider
                        sx={{width: 200, ml: 2}}
                        value={volume * 100} // Slider 的值为 0 到 100
                        onChange={handleVolumeChange} // 调节音量
                        min={0}
                        max={100}
                        disabled={!trackSrc} // 禁用 Slider，如果没有音频
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default NowPlayingBar;