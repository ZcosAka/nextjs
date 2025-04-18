'use client';
import { useTheme } from 'next-themes'
export default function ToggleTheme() {

  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }}>
      `Toggle Theme current is: {theme}`
    </button>
  )
}
