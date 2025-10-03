import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export type App = {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  type: "default" | "group";
};

export type AppGroup = {
  title: string;
  apps: App[];
};

export function Apps({ apps }: { apps: AppGroup[] }) {
  return (
    <section className="p-3.5 flex flex-col gap-y-3.5 w-full">
      {apps.map((appGroup, groupIndex) => (
        <AppsGroup key={appGroup.title} group={appGroup} groupIndex={groupIndex} />
      ))}
    </section>
  );
}

export function AppsGroup({ group, groupIndex }: { group: AppGroup; groupIndex: number }) {
  const baseDelay = groupIndex * 0.2;
  
  return (
    <motion.div
      className="flex flex-col gap-y-3 w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: baseDelay,
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <motion.div
        className="flex items-center justify-between px-3"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          delay: baseDelay + 0.15,
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        <h2 className="text-xl font-bold">{group.title}</h2>
        <Link to="/" className="text-sm text-secondary-foreground">See all</Link>
      </motion.div>
      <motion.div
        className="bg-[#252525] rounded-md p-3 flex flex-col gap-y-5 w-full"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: baseDelay + 0.2,
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        {group.apps.map((app, appIndex) => (
          <AppItem key={app.id} app={app} appIndex={appIndex} baseDelay={baseDelay + 0.3} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export function AppItem({ app, appIndex, baseDelay }: { app: App; appIndex: number; baseDelay: number }) {
  const itemDelay = baseDelay + (appIndex * 0.1);
  
  return (
    <motion.div
      className="flex items-center gap-2.5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: itemDelay,
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <motion.div
        className="w-[68px] h-[68px] rounded-md bg-background p-3 flex justify-center items-center shrink-0"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ 
          delay: itemDelay + 0.1,
          duration: 0.4,
          ease: "easeOut"
        }}
      >
        <img src={app.image} alt={app.name} className="w-full h-full object-cover" />
      </motion.div>
      <div className="flex flex-col gap-y-1 flex-1 min-w-0">
        <h3 className="text-lg font-semibold truncate">{app.name}</h3>
        <p className="text-xs font-medium text-muted-foreground truncate">{app.description}</p>
      </div>
      <Link to={app.link} className={cn(buttonVariants({
        size: 'sm',
      }), 'shrink-0 text-xs h-7')} >Open</Link>
    </motion.div>
  );
}
