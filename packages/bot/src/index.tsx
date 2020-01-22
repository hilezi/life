import { QueryTwitchStreams } from '@/actions/QueryTwitchStreams'
import { LineContext, chain } from 'bottender'
import { router, text } from 'bottender/dist/router'
import { QueryTwitchStreamsText } from '@/configs/TEXT'
import { i18nAPI } from '@/lib/i18n/i18nAPI'
import { RecordUserSaying } from '@/actions/RecordUserSaying'
import { SayHelloWorld } from '@/actions/SayHelloWorld'
import { createDirectlyText } from '@/utils/createDirectlyText'
import { createCommandText } from '@/utils/createCommandText'
import { QueryCalendarEvents } from '@/actions/QueryCalendarEvents'
import { ShowTwitchTopGamesButton } from '@/actions/ShowTwitchTopGamesButton'

export default async function App(context: LineContext): Promise<unknown> {
  await i18nAPI.init()

  const isMultiPeopleMessage: boolean = ['group', 'room'].includes(
    context.event.source.type,
  )

  return chain([
    RecordUserSaying as any,
    router([
      text(
        isMultiPeopleMessage
          ? createCommandText('(直播|live)$')
          : createDirectlyText('(直播|live)$'),
        ShowTwitchTopGamesButton as any,
      ),
      text(createDirectlyText('(LA|ＬＡ)日曆'), QueryCalendarEvents as any),
      text(
        isMultiPeopleMessage
          ? createCommandText(QueryTwitchStreamsText)
          : createDirectlyText(QueryTwitchStreamsText),
        QueryTwitchStreams as any,
      ),
      text(
        isMultiPeopleMessage
          ? createCommandText(`(?<text>[\\s\\S]+)`)
          : createDirectlyText(`(?<text>[\\s\\S]+)`),
        SayHelloWorld as any,
      ),
    ]),
  ])
}
