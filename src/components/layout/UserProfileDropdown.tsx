import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuGroup} from "../ui/dropdown-menu"
import { CreditCard, LogOut, Settings, User } from "lucide-react"
import { useUser } from "@/hooks/useUser"

const mockUser = {
  name: "Padre Administrador",
  email: "padreAdministador@email.com",
  initials: "PA",  // Avatar Fallback
  avatarUrl: "https://github.com/shdacn.png", // Imagem real do avatar
}

export default function UserProfileDropdown() {
  const { handleLogout } = useUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            {/* Se houver imagem */}
            <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name}  />
            {/* Se não houver, aparece as iniciais */}
            <AvatarFallback>{mockUser.initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      {/* Conteúdo do Dropdown */}
      <DropdownMenuContent className="w-56 space-y-2 px-2 py-4" align="end" forceMount >
        {/* Informações do usuário */}
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{mockUser.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{mockUser.email}</p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Opçoes de navegação */}
        <DropdownMenuGroup className="space-y-2">
          <DropdownMenuItem className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>Perfil</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            <span>Configurações</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="flex items-center">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Assinatura</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Ação de logout */}
        <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500 flex items-center">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
