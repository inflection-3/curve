import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/wallet')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/wallet"!</div>
}
