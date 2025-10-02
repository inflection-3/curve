import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/reward')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/reward"!</div>
}
