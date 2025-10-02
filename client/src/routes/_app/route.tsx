import { TopNav } from '@/components/top-nav'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className='p-4 flex flex-col gap-6'>
    <TopNav />
    <Outlet />
  </section> 
}
