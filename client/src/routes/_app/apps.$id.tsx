import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Globe, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/_app/apps/$id')({
  component: RouteComponent,
})

function RouteComponent() {
    const links = [
        {
            link: '/',
            name: 'Website',
            Logo: <Globe/> 
        },
        {
            link: '/',
            name: 'Support',
            Logo: <Headphones/>
        },
    ]
  return <section className='flex flex-col w-full gap-y-5'>
    <AppsBreadcrumb />
    
    {/* Main Image Card with Animated Background */}
    <motion.div 
      className='relative h-[300px] w-full rounded-lg items-center justify-center flex flex-col gap-y-5 overflow-hidden'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
          background: [
            "linear-gradient(180deg, #000000 0%, #252525 80%, #252525 100%)",
            "linear-gradient(225deg, #000000 0%, #2a2a2a 80%, #252525 100%)",
            "linear-gradient(270deg, #050505 0%, #252525 80%, #2a2a2a 100%)",
            "linear-gradient(315deg, #000000 0%, #2a2a2a 80%, #252525 100%)",
            "linear-gradient(180deg, #000000 0%, #252525 80%, #252525 100%)",
          ],
        }}
        transition={{
          opacity: { delay: 0.6, duration: 0.4 },
          background: {
            delay: 0.8,
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
      
      {/* Content */}
      <motion.img 
        src="/test.svg" 
        className='w-[120px] h-[120px] object-cover relative z-10'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 0.8,
          type: "spring",
          stiffness: 150,
          damping: 12
        }}
      />
      <motion.p 
        className='text-4xl font-bold relative z-10'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.9,
          type: "spring",
          stiffness: 100,
          damping: 12
        }}
      >
        Goednet
      </motion.p>
    </motion.div>

    {/* Overview Section */}
    <motion.div 
      className='flex flex-col gap-y-2'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 1.0,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
    >
        <motion.h3 
          className='text-xl font-bold'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.3 }}
        >
          Overview
        </motion.h3>
        <motion.div 
          className='bg-[#252525] p-5 rounded-xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
            <motion.p 
              className='text-lg'
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ 
                delay: 1.3, 
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              Goednet is a platform that allows you to earn rewards by staking your tokens.
            </motion.p>
        </motion.div>
    </motion.div>

    {/* Links Section */}
    <motion.div 
      className='flex flex-col gap-y-2'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 1.4,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
    >
        <motion.h3 
          className='text-xl font-bold'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.3 }}
        >
          Links
        </motion.h3>
        <div className='flex gap-x-2'>
            {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1.6 + index * 0.1,
                    type: "spring",
                    stiffness: 80,
                    damping: 15
                  }}
                >
                  <LinkPIll link={link.link} name={link.name} Logo={link.Logo} />
                </motion.div>
            ))}
        </div>
    </motion.div>
  </section> 
}




function AppsBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            delay: 0,
            type: "spring",
            stiffness: 120,
            damping: 10
          }}
        >
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/apps">Defi</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            delay: 0.1,
            type: "spring",
            stiffness: 120,
            damping: 10
          }}
        >
          <BreadcrumbSeparator />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            delay: 0.2,
            type: "spring",
            stiffness: 120,
            damping: 10
          }}
        >
          <BreadcrumbItem>
            <BreadcrumbPage>Goednet</BreadcrumbPage>
          </BreadcrumbItem>
        </motion.div>
      </BreadcrumbList>
    </Breadcrumb>
  )
}




function LinkPIll({link, name, Logo}: {
    link: string
    name: string
    Logo: React.ReactNode
}) {
    return <Link to={link} className='bg-[#252525] h-11 px-4 flex items-center gap-x-2 rounded-full'>
        {Logo}
        <p className='text-sm'>{name}</p>
    </Link>
}

