'use client'

import { FC } from 'react'
import { HeaderProps } from './types'
import logo from '@/shared/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header: FC<HeaderProps> = ({ dict }) => {
  const pathname = usePathname()
  return (
    <header className="flex w-full items-center justify-center">
      <div className="relative flex items-center gap-14 rounded-full bg-accent-foreground py-4 pr-14 pl-24">
        <Link className="absolute left-2 h-10 w-10" href="/">
          <Image
            src={logo.src}
            alt="logo"
            className="object-cover"
            fill
            priority
          />
        </Link>
        <ul className="flex gap-6">
          {dict.records &&
            dict.records.map((record, i) => (
              <li key={i}>
                <Link
                  href={record.fields.url}
                  className={`hover:text-secondary hover:underline ${pathname === record.fields.url ? 'text-secondary' : 'text-secondary/60'}`}
                >
                  {record.fields.text}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </header>
  )
}
