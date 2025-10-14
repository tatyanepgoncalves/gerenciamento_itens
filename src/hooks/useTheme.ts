import { useEffect, useState } from "react"

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    // Acessa o elemento raiz da página (tag <html>)
    const root = window.document.documentElement

    if (isDark) {
      // Se o estado 'isDark' for verdadeiro, adiciona a classe 'dark'
      root.classList.add("dark")
    } else {
      // Se não, remove a classe 'dark'
      root.classList.remove("dark")
    }
  }, [isDark]); // o efeito é executado sempre que o estado 'isDark' muda

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return {
    isDark,
    toggleTheme
  }
}