import { TopNav } from '@/components/top-nav'
import { createFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import {
  HomeIcon,
  WalletIcon,
  HistoryIcon
} from "@/components/icons"
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})


const bottomNavItems = [
  {
    label: 'Home',
    to: '/',
    icon: <HomeIcon className='size-6' />
  },
  {
    label: 'Wallet',
    to: '/wallet',
    icon: <WalletIcon className='size-6' />
  },
  {
    label: 'history',
    to: '/history',
    icon: <HistoryIcon className='size-6' />
  }
]

function RouteComponent() {
  const location = useLocation();
  return <section className='p-4 flex flex-col gap-6 h-screen relative'>
    <TopNav />
    <Outlet />
    <motion.div
      className='h-20 w-full bg-background bottom-1 absolute flex items-center justify-between px-10 rounded-xl overflow-visible'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
       {
        bottomNavItems.map((item, index) => (
          <motion.div
            key={item.to}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          >
            <Link to={item.to} className={cn('relative flex flex-col items-center justify-center gap-y-1 text-muted-foreground', location.pathname === item.to && 'text-white')}>
              {location.pathname === item.to && (
                <motion.div
                  className='absolute -top-4 left-0 w-full bg-white rounded-full h-1'
                  layoutId="activeTab"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              {item.icon}
              <p className='text-sm'>{item.label}</p>
            </Link>
          </motion.div>
        ))
       }
    </motion.div>
  </section> 
}
