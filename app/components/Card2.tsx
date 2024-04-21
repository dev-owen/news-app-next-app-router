'use client';

import React from 'react';
import {Card, CardContent} from "@/app/components/ui/card";
import {useRouter} from "next/navigation";

const Card2 = ({article}: any) => {
  const router = useRouter();

  return (
    <Card onClick={() => router.push(article.url)}>
      <CardContent className="p-4">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <img
              alt="Cover image"
              className="aspect-square rounded-lg object-cover"
              height={120}
              src={article?.urlToImage || ''}
              width={120}
            />
            <div className="grid gap-2">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-sm leading-none">{article.description}</p>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex flex-col">
                    <div className="font-semibold">{article.author}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Card2;
