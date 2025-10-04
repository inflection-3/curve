import { PaymentsIcon, RewardsIcon, SystemNotification } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { createFileRoute } from '@tanstack/react-router'
import { Menu, Search } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/_app/notifications')({
  component: RouteComponent,
})


const tabs = [
    {
        label: 'All',
        value: 'all'
    },
    {
        label: 'Payments',
        value: 'payments'
    },
    {
        label: 'Referrals',
        value: 'referrals'
    },
    {
        label: 'System',
        value: 'system'
    }
]


const mockNotifications = [
    {
        title: 'Payment Received',
        time: '12:00 PM',
        type: 'payments' as const
    },
    {
        title: 'You have earned 100 points',
        time: '12:00 PM',
        type: 'rewards' as const
    },
    
    {
        title: 'Payment Received',
        time: '12:00 PM',
        type: 'system' as const
    },
]   



function RouteComponent() {
  return <section className='w-full flex flex-col gap-y-5'>
    <motion.div 
        className='bg-[#252525] rounded-[7px] p-4 flex items-center gap-x-2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
    >
        <Search className='size-5' />
        <input className='w-full outline-none bg-transparent focus:outline-none border-none focus:ring-0' placeholder='Search' />
    </motion.div>
    <motion.div 
        className='flex items-center justify-between'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
    >
        <p className='flex items-baseline gap-x-0.5'>
            <span className='text-2xl font-semibold'>3</span>
            <span className='font-medium'>Notifications</span>
        </p>
        <Button variant={"ghost"} size={"icon"}>
            <Menu/>
        </Button>
    </motion.div>
    <NotificationTabs tabs={tabs} />
    <NotificationsList />
  </section> 
}


type NotificationTabsProps = {
    tabs: {
        label: string
        value: string
    }[]
}


function NotificationTabs({ tabs }: NotificationTabsProps) {
    const [activeTab, setActiveTab] = useState(tabs[0].value)
    return <motion.div 
        className='flex items-center gap-2.5 relative'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
    >
        {tabs.map((tab, index) => (
            <NotificationsTabItem 
                onClick={() => setActiveTab(tab.value)} 
                key={tab.value} 
                {...tab} 
                activeTab={activeTab}
                index={index}
            />
        ))}
    </motion.div>
}


function NotificationsTabItem({ label, value, activeTab, onClick, index }: NotificationTabsProps['tabs'][number] & { activeTab: string, onClick: () => void, index: number }) {
    const isActive = activeTab === value;
    return (
        <motion.button
            onClick={onClick}
            className={cn(
                'relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                isActive ? 'text-primary-foreground' : 'text-[#D9D9D9] hover:text-white'
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + (index * 0.05), duration: 0.25, ease: "easeOut" }}
        >
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-md"
                    transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                    }}
                />
            )}
            <span className="relative z-10">{label}</span>
        </motion.button>
    );
}


function NotificationsList() {
    return <div className='flex flex-col gap-y-4'>
        {mockNotifications.map((notification, index) => (
            <NotificationItem key={notification.title} {...notification} index={index} />
        ))}
    </div>
}


type NotificationItemProps = {
    title: string
    time: string
    type: 'payments' | 'rewards' | 'system'
    index: number
}



function NotificationItem({ title,  time, type, index }: NotificationItemProps) {
    const typeToIcon = {
        payments: <PaymentsIcon />,
        rewards: <RewardsIcon />,
        system: <SystemNotification />
    }
    
    const baseDelay = 0.56;
    const staggerDelay = index * 0.08;
    
    return (
        <motion.div
            className='flex items-center gap-x-2.5 bg-[#383838] p-3.5 rounded-md'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: baseDelay + staggerDelay,
                duration: 0.3,
                ease: "easeOut"
            }}
        >
            <motion.div
                className='bg-background w-16 h-16 rounded-md flex items-center justify-center'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: baseDelay + staggerDelay + 0.1,
                    duration: 0.25,
                    ease: "easeOut"
                }}
            >
                {typeToIcon[type]}
            </motion.div>
            <div className='flex flex-col gap-y-1'>
                <div className='bg-[#191919] text-[#D9D9D9] h-5 px-2.5 rounded-full capitalize w-max text-xs'>{type}</div>
                <p className='text-sm font-semibold'>{title}</p>
            </div>
            <p className='text-sm text-[#D9D9D9] ml-auto shrink-0'>{time}</p>
        </motion.div>
    );
}