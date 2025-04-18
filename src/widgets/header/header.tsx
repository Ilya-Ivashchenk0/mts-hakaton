'use client'

import { FC } from "react"
import { HeaderProps } from "./types"
import logo from '@/shared/images/logo.svg'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header: FC<HeaderProps> = ({ dict }) => {
  const pathname = usePathname()
  return (
    <header className="flex justify-center items-center w-full">
      <div className="py-4 pl-24 pr-14 bg-accent-foreground flex gap-14 items-center rounded-full relative">
        <Link className="absolute left-2 w-10 h-10" href="/">
          <Image src={logo.src} alt='logo' priority width={40} height={40} />
        </Link>
        <ul className="flex gap-6">
          {dict.records && dict.records.map((record, i) => (
            <li key={i}>
              <Link
                href={record.fields.Url}
                className={`hover:underline hover:text-secondary ${pathname === record.fields.Url ? 'text-secondary'  : 'text-secondary/60'}`}
              >
                {record.fields.Text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
