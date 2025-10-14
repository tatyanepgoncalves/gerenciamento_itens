import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="absolute w-full bottom-0 left-0 text-center py-2">
      <p className="text-zinc-600 dark:text-zinc-500 text-xs">Desenvolvido por <Link to="https://github.com/tatyanepgoncalves">Tatyane Gonçalves</Link></p>
    </footer>
  )
}