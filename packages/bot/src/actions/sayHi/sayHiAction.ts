import { LineAction } from '@/lib/bottender-toolkit/types'
import { showTwitchTopGamesCommandBubble } from '@/actions/showTwitchTopGames/showTwitchTopGamesCommandBubble'
import { queryNewsCommandBubble } from '@/actions/queryNews/queryNewsCommandBubble'
import { queryTwitchStreamsCommandBubble } from '@/actions/queryTwitchStreams/queryTwitchStreamsCommandBubble'
import { sayBullshitCommandBubble } from '@/actions/sayBullshit/sayBullshitCommandBubble'
import { createCommandHintBubble } from '@/lib/bottender-toolkit/templates/createCommandHintBubble'

export const sayHiAction: LineAction = async (context, props) => {
  const seeLink = {
    type: 'bubble',
    size: 'micro',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '那個機器人',
          weight: 'bold',
          color: '#1DB446',
          size: 'sm',
        },
        {
          type: 'text',
          text: '關於',
          weight: 'bold',
          size: 'xxl',
          margin: 'md',
        },
        {
          type: 'text',
          text: '如何使用這個機器人',
          size: 'xs',
          color: '#aaaaaa',
          wrap: true,
        },
        {
          type: 'separator',
          margin: 'xxl',
        },
      ],
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      margin: 'xxl',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'primary',
          height: 'sm',
          action: {
            type: 'uri',
            label: '查看',
            uri:
              'https://www.notion.so/hilezi/d7ac6acf3ee94029a245be3df3c9f5fe',
          },
        },
      ],
    },
  }

  await context.sendFlex('快速執行指令', {
    type: 'carousel',
    contents: [
      showTwitchTopGamesCommandBubble(context),
      queryTwitchStreamsCommandBubble(context),
      queryNewsCommandBubble(context),
      sayBullshitCommandBubble(context),
      seeLink,
    ] as any,
  })

  return props.next
}
