import { redirect } from 'next/navigation'

// /dashboard/progress redirects to the richer /dashboard/evolution page
export default function ProgressPage() {
  redirect('/dashboard/evolution')
}
