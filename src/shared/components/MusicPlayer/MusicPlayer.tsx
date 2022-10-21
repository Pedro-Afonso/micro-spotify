/* eslint-disable @typescript-eslint/no-empty-function */
import { Box, Paper, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import { playPause } from '../../redux/slices/playerSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { Controller } from './Controller'
import { Player } from './Player'
import { Seekbar } from './Seekbar'
import { Track } from './Track'
import { VolumeBar } from './VolumeBar'

interface IMusicPlayerProps {
  children: React.ReactNode
}

export const MusicPlayer: React.FC<IMusicPlayerProps> = ({ children }) => {
  const { activeSong, isPlaying } = useAppSelector(state => state.player)
  const dispatch = useAppDispatch()

  const [volume, setVolume] = useState(1)
  const [repeat] = useState(false)
  const [seekTime, setSeekTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [appTime, setAppTime] = useState(0)

  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up('sm'))

  const handlePlayPause = () => {
    dispatch(playPause(!isPlaying))
  }

  return (
    <>
      <Box paddingBottom={theme.spacing(14)}>{children}</Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingX={4}
        component={Paper}
        position="fixed"
        bottom={0}
        left={{ xs: 0, md: theme.spacing(28) }}
        right={0}
        height={theme.spacing(14)}
      >
        <Track activeSong={activeSong} />
        <Box display="flex" flexDirection="column" alignItems="center" flex={2}>
          <Controller handlePlayPause={handlePlayPause} isPlaying={isPlaying} />
          <Player
            volume={volume}
            activeSong={activeSong}
            isPlaying={isPlaying}
            seekTime={seekTime}
            repeat={repeat}
            onEnded={() => {}}
            onTimeUpdate={e => setAppTime(e.currentTarget.currentTime)}
            onLoadedData={e => setDuration(e.currentTarget.duration)}
          />
          <Seekbar
            max={duration}
            min={0}
            value={appTime}
            setSeekTime={setSeekTime}
          />
        </Box>
        {smUp && (
          <VolumeBar setVolume={setVolume} value={volume} max={1} min={0} />
        )}
      </Box>
    </>
  )
}
