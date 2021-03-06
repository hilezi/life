import { gaAPI } from '@/lib/gaAPI'
import { NewsDoc } from '@/lib/mongodb/models/news'

export const queryNewsGA = {
  onCrawl: (keyword: string) => {
    gaAPI.send({
      ec: gaAPI.EventCategory.LINEBOT,
      ea: `${keyword}/新聞/查詢`,
      el: '',
      ev: 0,
    })
  },
  onQuery: (keyword: string) => {
    gaAPI.send({
      ec: gaAPI.EventCategory.LINEBOT,
      ea: `${keyword}/新聞/查詢`,
      el: '',
      ev: 3,
    })
  },
  onResponsed: (keyword: string, data: NewsDoc[]) => {
    gaAPI.send({
      ec: gaAPI.EventCategory.LINEBOT,
      ea: `${keyword}/新聞/查詢/回應`,
      el: `length=${data.length}`,
      ev: 1,
    })
  },
  onError: (keyword: string, error: Error) => {
    gaAPI.send({
      ec: gaAPI.EventCategory.LINEBOT,
      ea: `${keyword}/新聞/查詢/錯誤`,
      el: `error.message=${error.message}`,
      ev: 0,
    })
  },
}
