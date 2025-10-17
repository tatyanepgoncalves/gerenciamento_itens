import NavMobile from './NavMobile'
import UserProfileDropdown from './UserProfileDropdown'

export default function Action() {
  return (
    <div className='flex items-center space-x-2'>
      <UserProfileDropdown />

      <div className='lg:hidden'>
        {/* Navegação Mobile */}
        <NavMobile />

      </div>
    </div>
  )
}
