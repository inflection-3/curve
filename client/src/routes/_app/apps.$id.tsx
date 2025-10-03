import { createFileRoute,  } from '@tanstack/react-router'

import { AppDetails } from '@/components/app-details'

export const Route = createFileRoute('/_app/apps/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AppDetails />
}



