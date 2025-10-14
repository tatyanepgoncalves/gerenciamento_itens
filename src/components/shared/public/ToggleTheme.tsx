import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from  "lucide-react";

export default function ToggleTheme() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <Button className="bg-transparent text-zinc-800 dark:text-zinc-100 hover:bg-transparent" onClick={toggleTheme} size="icon-sm">
      {isDark ? <Sun strokeWidth={1.5} /> : <Moon strokeWidth={1.5} />}
    </Button>
  )
}