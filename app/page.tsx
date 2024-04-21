import Link from "next/link"
import {Avatar, AvatarImage} from "@/app/components/ui/avatar"
import {Button} from "@/app/components/ui/button"
import {Popover, PopoverContent, PopoverTrigger} from "@/app/components/ui/popover"
import {Calendar} from "@/app/components/ui/calendar"
import {ActivityIcon, CalendarDaysIcon, HomeIcon} from "@/app/components/ui/icons";
import Card2 from "@/app/components/Card2";
import SearchBar from "@/app/components/SearchBar";
import ArticleList from "@/app/components/ArticleList";

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

export default async function Home() {
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
        <ArticleList />
      </div>
    </section>
  )
}
