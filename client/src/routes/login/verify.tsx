import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login/verify')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/login/verify"!</div>
}
