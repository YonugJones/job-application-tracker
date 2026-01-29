'use client'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { signOut } from '@/lib/auth/authClient'
import { useRouter } from 'next/navigation'

export default function SignOutButton() {
  const router = useRouter()

  return (
    <DropdownMenuItem
      onClick={async () => {
        const result = await signOut()
        if (result.data) {
          router.push('/login')
        } else {
          alert('Error signing out')
        }
      }}
    >
      Log out
    </DropdownMenuItem>
  )
}
