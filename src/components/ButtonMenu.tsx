import { Button } from "@/components/ui/button";
import { useMenu } from "@/hooks/useMenu";
import { MenuIcon, X } from "lucide-react";

export default function ButtonMenu() {
  const {toggleMenu, isOpen  } = useMenu()

  return (
    <Button className="bg-transparent text-zinc-800 dark:text-zinc-100 hover:bg-transparent" onClick={toggleMenu}>
      {isOpen ? <X strokeWidth={1.5} /> : <MenuIcon strokeWidth={1.5} />}
    </Button>
  )
}