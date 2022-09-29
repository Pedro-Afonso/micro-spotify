import { IArtistDetails } from './IArtistDetails'
import { IMusic } from './IMusic'

interface Track {
  track: IMusic
}

export interface ISearch {
  tracks?: { hits: Track[] }
  artists?: { hits: IArtistDetails[] }
}
