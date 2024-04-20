import {Card, CardContent} from "@/app/components/ui/card"

const NEWS_DATA = [
  {
    author: 'finbold.com222',
    title: 'AI predicts Dogecoin price for May 1, 2024',
    description: 'Although many assets in the cryptocurrency sector have resumed their bullish run from the previous weeks, Dogecoin (DOGE) still seems to be waiting for its turn. Despite the growing transaction volume indicating heightened activity, the meme-inspired cryptocu…',
    urlToImage: 'https://c.biztoc.com/p/d31595c9e595ca5a/s.webp'
  },
  {
    author: 'finance.yahoo.com',
    title: 'Should You Buy Tesla Stock Before Aug. 8?',
    description: 'One of the most scrutinized businesses in the world is electric vehicle (EV) pioneer Tesla (NASDAQ: TSLA). Tesla\'s unconventional CEO, Elon Musk, has a lot to do with the company\'s constant position in the spotlight. Musk\'s tendency to go off-script during ea…',
    urlToImage: 'https://c.biztoc.com/p/d0fb4501dfefa328/s.webp'
  },
  {
    author: 'Matthew Ehret-Kump',
    title: 'The Occult Tesla: Why Tesla Flattened Space and Attacked Einstein',
    description: 'All Global Research articles can be read in 51 languages by activating the Translate Website button below the author’s name (only available in desktop version). To receive Global Research’s Daily Newsletter (selected articles), click here. Click the share but…',
    urlToImage: 'https://www.globalresearch.ca/wp-content/uploads/2024/04/tesla.jpeg'
  }
]

export default function Headlines() {
  return (
    <section key="1">
      <div className="flex flex-col h-screen">
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
            <div className="grid gap-4 p-4 md:grid-rows-[min-content_1fr] lg:gap-6 md:p-6">
              {NEWS_DATA.map((news, index) => (
                <Card key={`${news.title}-${index}`}>
                  <CardContent className="p-4">
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          alt="Cover image"
                          className="aspect-square rounded-lg object-cover"
                          height={120}
                          src={news.urlToImage}
                          width={120}
                        />
                        <div className="grid gap-2">
                          <h2 className="text-xl font-semibold">{news.title}</h2>
                          <p className="text-sm leading-none">{news.description}</p>
                          <div className="flex justify-between items-end">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="flex flex-col">
                                <div className="font-semibold">{news.author}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
