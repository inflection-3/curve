import { Apps } from '@/components/apps'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/apps/')({
  component: RouteComponent,
})

const apps = [
  {
    title: 'DePin',
    apps: [
      {
        id: '1',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
      {
        id: '2',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
      {
        id: '3',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
    ],
  },
  {
    title: 'DePin',
    apps: [
      {
        id: '1',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
      {
        id: '2',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
      {
        id: '3',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
    ],
  },
  {
    title: 'DePin',
    apps: [
      {
        id: '1',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
      {
        id: '2',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
      {
        id: '3',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
    ],
  },
  {
    title: 'DePin',
    apps: [
      {
        id: '1',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
      {
        id: '2',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
      {
        id: '3',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
    ],
  },
  {
    title: 'DePin',
    apps: [
      {
        id: '1',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
      {
        id: '2',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
      {
        id: '3',
        name: 'Geodnet',
        description: 'Avantis is your gateway to global markets onchain, whether it\'s equities, FX, crypto or your favourite memecoin perps',
        image: '/test.svg',
        link: '/app1',
        type: 'default' as const,
      },
    ],
  },
]


function RouteComponent() {
  return <Apps apps={apps} />
}
