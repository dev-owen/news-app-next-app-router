import Link from "next/link";
import {ActivityIcon, HomeIcon} from "@/app/components/ui/icons";

export default function HeadlinesLayout({
                                          children
                                        }: {
  children: React.ReactNode,
}) {
  return (
    <section>
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
      </div>
      {children}
    </section>
  )
}
