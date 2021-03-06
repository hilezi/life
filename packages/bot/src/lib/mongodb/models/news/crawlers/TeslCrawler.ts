import { Crawler } from '@/lib/mongodb/models/news/crawlers/Crawler'
import { NewsProvider } from '@/lib/mongodb/models/news/NewsProvider'
import cheerio from 'cheerio'
import dayjs from 'dayjs'
import fetch from 'node-fetch'
import getUuidByString from 'uuid-by-string'
import { NewsDoc } from '@/lib/mongodb/models/news'
import { axiosAPI } from '@/lib/axiosAPI'

/** TESL */
export class TeslCrawler implements Crawler {
  public provider = NewsProvider.TESL

  public async crawl(keyword: string) {
    let news: NewsDoc[] = []

    for (const currentPage of [1, 2, 3]) {
      for (const url of [
        'http://www.esports.com.tw/edcontent.php?lang=tw&tb=2&cid=52&currentpage=', // 遊戲新聞
        'http://www.esports.com.tw/edcontent.php?lang=tw&tb=2&cid=36&currentpage=', // 電競新聞
      ]) {
        const crawledNews = await axiosAPI
          .get<string>(`${url}=${currentPage}`)
          .then(({ data: htmlText }) => {
            return (cheerio(htmlText)
              .find('.row.item')
              .map((index, element) => {
                const linkUrl =
                  cheerio(element)
                    .find('a')
                    .attr('href') || ''

                const title =
                  cheerio(element)
                    .find('a')
                    .attr('title') || ''

                const newsId = getUuidByString(title)

                return {
                  newsId,
                  coverUrl: cheerio(element)
                    .find('.img-responsive')
                    .attr('src'),
                  linkUrl: `http://esports.com.tw/${linkUrl}`,
                  postedAt: dayjs(
                    cheerio(element)
                      .find('.listdate')
                      .text()
                      .trim()
                      .replace(/\n/, '/'),
                  ).toDate(),
                  provider: this.provider,
                  tag: [],
                  title: title.trim(),
                } as NewsDoc
              })
              .toArray() as any) as NewsDoc[]
          })
        news = [...news, ...crawledNews]
      }
    }

    return news
      .filter(item => item.title.includes(keyword))
      .map(item => ({
        ...item,
        tag: [keyword],
      }))
  }
}
