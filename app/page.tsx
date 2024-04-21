import Link from "next/link"
import {Avatar, AvatarImage} from "@/app/components/ui/avatar"
import {Button} from "@/app/components/ui/button"
import {Popover, PopoverContent, PopoverTrigger} from "@/app/components/ui/popover"
import {Calendar} from "@/app/components/ui/calendar"
import {Input} from "@/app/components/ui/input";
import {Button2} from "@/app/components/ui/button2";
import {ActivityIcon, CalendarDaysIcon, HomeIcon, SearchIcon} from "@/app/components/ui/icons";
import Card2 from "@/app/components/Card2";

const NEWS_DATA = [
  {
    author: 'finbold.com',
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

async function getData() {
  const res = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-03-22&sortBy=publishedAt&apiKey=484073055b364b94b553a82ab633e949')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <section key="1">
      <div className="flex flex-col h-screen">
        <div className="flex items-center justify-between p-4 border-b sm:p-6">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <Link className="flex items-center gap-2" href='/'>
              <HomeIcon className="w-6 h-6"/>
              Home
            </Link>
            <Link className="flex items-center gap-2" href='/headlines'>
              <ActivityIcon className="w-6 h-6"/>
              Headlines
            </Link>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div>
              <div className="rounded-lg focus:outline-none focus:ring-1 ring-gray-900/40">
                <Avatar className="w-8 h-8">
                  <AvatarImage alt="Avatar" src="/avatar.jpg"/>
                </Avatar>
                <span className="sr-only">Toggle menu</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full px-8 pt-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"/>
            <Input
              className="rounded-md border border-gray-300 bg-white py-2 pl-10 pr-12 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              placeholder="Search for anything..."
              type="search"
            />
          </div>
          <Button2
            className="ml-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
            type="submit"
          >
            Search
          </Button2>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-[240px] justify-start text-left font-normal" variant="outline">
                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1"/>
                Pick a date
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0">
              <Calendar initialFocus mode="single"/>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
            <div className="grid gap-4 p-4 md:grid-rows-[min-content_1fr] lg:gap-6 md:p-6">
              {data.articles.map((article: any, index: number) => (
                <Card2 key={article.title} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
