'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

export default function ThemeSwitcherButton() {
   const [theme, setTheme] = useState<'light' | 'dark'>('light')

   useEffect(() => {
      const themeValue = localStorage.getItem('theme')
      if (!themeValue || themeValue === 'system') {
         const isDark = matchMedia('(prefers-color-scheme: dark)').matches
         if (isDark) setTheme('dark')
         else setTheme('light')
      } else if (themeValue === 'dark') setTheme('dark')
      else setTheme('light')
   }, [])

   const handleSwitch = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
      localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
      if (theme === 'dark') {
         document.documentElement.classList.remove('dark')
      } else document.documentElement.classList.add('dark')
   }

   return (
      <button
         onClick={handleSwitch}
         className="rounded-lg border p-1 dark:border-border-dark"
      >
         {theme === 'dark' ? <IconSun stroke={1} /> : <IconMoon stroke={1} />}
         <span className="sr-only">
            Switch To {theme === 'dark' ? 'light ' : 'dark'} mode
         </span>
      </button>
   )
}
