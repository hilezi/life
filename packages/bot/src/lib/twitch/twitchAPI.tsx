import { GameID } from './enums/GameID'
import { axiosAPI } from './axiosAPI'
import { StreamRemote } from './resources/StreamRemote'
import { LanguageParam } from './enums/LanguageParam'
import { GameRemote } from '@/lib/twitch/resources/GameRemote'

export const twitchAPI = {
  async searchGame(name: string) {
    type Response = {
      data: GameRemote[]
    }

    const request = await axiosAPI.get<Response>('/games', {
      params: {
        name,
      },
    })

    return request.data
  },
  async getStreams(options: {
    /** Maximum number of objects to return. Maximum: 100. Default: 20. */
    first?: number
    gameId: GameID
    language: LanguageParam
  }) {
    try {
      type Response = {
        data: StreamRemote[]
        pagination: {
          cursor: string
        }
      }

      const request = await axiosAPI.get<Response>('/streams', {
        params: options,
      })

      return request.data
    } catch (error) {
      throw new Error(error.message)
    }
  },
}
