import { IconAlpha, IconBrandGithub, IconSearch } from '@tabler/icons-react'
import ThemeSwitcherButton from '../buttons/theme-switcher-button'

export function Header() {
   return (
      <header className="border-b dark:border-border-dark">
         <div className="mx-auto grid h-16 w-full max-w-7xl grid-cols-[auto,1fr] px-2 md:px-4 xl:px-0">
            <div className="flex items-center">
               <IconAlpha className="size-8" />
               <h2 className="text-xl font-semibold">ClassicUI</h2>
            </div>
            <div className="flex items-center justify-end gap-3">
               <button className="hidden w-full max-w-60 rounded-lg border p-1 px-2 sm:flex sm:items-center sm:justify-between sm:gap-3 dark:border-border-dark">
                  <div className="flex items-center gap-2">
                     <IconSearch className="size-4" stroke={1} />
                     <span className="text-gray-400">Search</span>
                  </div>
                  <div className="rounded-lg border bg-gray-100 px-1 py-[2px] text-xs font-semibold dark:border-border-dark dark:bg-[#202020]">
                     Ctrl + K
                  </div>
               </button>
               <button className="rounded-lg border p-1 sm:hidden dark:border-border-dark">
                  <IconSearch stroke={1} />
                  <span className="sr-only">Search Components</span>
               </button>
               <button className="rounded-lg border p-1 dark:border-border-dark">
                  <IconBrandGithub stroke={1} />
                  <span className="sr-only">Github Repository</span>
               </button>
               <ThemeSwitcherButton />
            </div>
         </div>
      </header>
   )
}
