import { useEffect, useRef } from 'react'
/* import audioTrack from '../../../assets/sick_love.mp3' */
import { IMusic } from '../../redux/models/IMusic'

interface IPlayerProps {
  activeSong: IMusic | null
  isPlaying: boolean
  volume: number
  seekTime: number
  onEnded: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void
  onTimeUpdate: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void
  onLoadedData: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void
  repeat: boolean
}

export const Player: React.FC<IPlayerProps> = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat
}) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime
    }
  }, [seekTime])

  return (
    <audio
      ref={audioRef}
      src={activeSong?.hub?.actions[1]?.uri}
      autoPlay={true}
      loop={repeat}
      onLoadedData={onLoadedData}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
    >
      <track src="/" kind="captions" />
    </audio>
  )
}
