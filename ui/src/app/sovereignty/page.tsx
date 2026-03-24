import { redirect } from 'next/navigation'

// /sovereignty → /sovereign (canonical page)
export default function SovereigntyPage() {
  redirect('/sovereign')
}
