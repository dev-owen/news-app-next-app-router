'use client'

import SearchBar from "@/app/components/SearchBar";
import {Popover, PopoverContent, PopoverTrigger} from "@/app/components/ui/popover";
import {Button} from "@/app/components/ui/button";
import {CalendarDaysIcon} from "@/app/components/ui/icons";
import {Calendar} from "@/app/components/ui/calendar";
import Card2 from "@/app/components/Card2";
import {useEffect, useState} from "react";

async function getData(searchQuery: string) {
  const url = `https://newsapi.org/v2/everything?q=${searchQuery || 'tesla'}&from=2024-03-22&sortBy=publishedAt&apiKey=484073055b364b94b553a82ab633e949`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
const ArticleList = async () => {
  const [searchQuery, setSearchQuery] = useState('tesla');
  const [data, setData] = useState({ articles: [] });  // Initialize data state

  // useEffect to trigger getData when searchQuery changes
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(searchQuery);
      setData(result);
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  return (
    <>
      <div className="flex items-center w-full px-8 pt-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
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
              <Card2 key={article.title} article={article}/>
            ))}
          </div>
        </div>
      </div>
    </>
)
  ;
};

export default ArticleList;
