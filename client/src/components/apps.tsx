import { Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatedText } from "./animated-text";
import { useState, useRef, useCallback } from "react";
import { Drawer, DrawerContent, DrawerHeader } from "./ui/drawer";
import { Globe, Headphones, X } from "lucide-react";
import { Button } from "./ui/button";

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

export function AppsList({ apps, baseDelay = 0.70 }: { apps: App[], baseDelay?: number }) {
  return (
    <section className="flex flex-col gap-y-3.5 w-full">
      {apps.map((app, appIndex) => (
        <motion.div 
          key={app.id}
          className="bg-[#252525] rounded-md p-3 flex flex-col gap-y-5 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay + (appIndex * 0.08), duration: 0.3, ease: "easeOut" }}
        >
          <AppItem app={app} appIndex={appIndex} baseDelay={baseDelay + (appIndex * 0.08)} />
        </motion.div>
      ))}
    </section>
  );
}

export function Apps({ apps }: { apps: AppGroup[] }) {
  return (
    <section className="p-3.5 flex flex-col gap-y-3.5 w-full">
      {apps.map((appGroup, groupIndex) => (
        <AppsGroup
          key={appGroup.title}
          group={appGroup}
          groupIndex={groupIndex}
        />
      ))}
    </section>
  );
}

export function AppsGroup({
  group,
  groupIndex,
}: {
  group: AppGroup;
  groupIndex: number;
}) {
  const baseDelay = groupIndex * 0.08;

  return (
    <motion.div
      className="flex flex-col gap-y-3 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: baseDelay,
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="flex items-center justify-between px-3"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: baseDelay + 0.05,
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        <AnimatedText
          as="h2"
          className="text-xl font-bold"
          delay={baseDelay + 0.1}
          duration={0.3}
          blurAmount="3px"
        >
          {group.title}
        </AnimatedText>
        <Link to="/" className="text-sm text-secondary-foreground">
          <AnimatedText
            delay={baseDelay + 0.12}
            duration={0.25}
            blurAmount="2px"
          >
            See all
          </AnimatedText>
        </Link>
      </motion.div>
      <motion.div
        className="bg-[#252525] rounded-md p-3 flex flex-col gap-y-5 w-full"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: baseDelay + 0.08,
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        {group.apps.map((app, appIndex) => (
          <AppItem
            key={app.id}
            app={app}
            appIndex={appIndex}
            baseDelay={baseDelay + 0.3}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export function AppItem({
  app,
  appIndex,
  baseDelay,
}: {
  app: App;
  appIndex: number;
  baseDelay: number;
}) {
  const itemDelay = baseDelay + appIndex * 0.04;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const handleLongPressStart = useCallback(() => {
    longPressTimer.current = setTimeout(() => {
      setIsDrawerOpen(true);
    }, 500); // 500ms for long press
  }, []);

  const handleLongPressEnd = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }, []);

  const handleOpenClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      navigate({ to: "/apps/$id", params: { id: app.id } });
    },
    [app.id, navigate]
  );

  return (
    <>
      <motion.div
        className="flex items-center gap-2.5 cursor-pointer select-none"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: itemDelay,
          duration: 0.25,
          ease: "easeOut",
        }}
        onMouseDown={handleLongPressStart}
        onMouseUp={handleLongPressEnd}
        onMouseLeave={handleLongPressEnd}
        onTouchStart={handleLongPressStart}
        onTouchEnd={handleLongPressEnd}
      >
        <motion.div
          className="w-[68px] h-[68px] rounded-md bg-background p-3 flex justify-center items-center shrink-0"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{
            delay: itemDelay + 0.05,
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          <img
            src={app.image}
            alt={app.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="flex flex-col gap-y-1 flex-1 min-w-0">
          <AnimatedText
            as="h3"
            className="text-lg font-semibold truncate"
            delay={itemDelay + 0.06}
            duration={0.3}
            blurAmount="3px"
          >
            {app.name}
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-xs font-medium text-muted-foreground truncate"
            delay={itemDelay + 0.08}
            duration={0.25}
            blurAmount="2px"
          >
            {app.description}
          </AnimatedText>
        </div>
        <button
          onClick={handleOpenClick}
          className={cn(
            buttonVariants({
              size: "sm",
            }),
            "shrink-0 text-xs h-7"
          )}
        >
          <AnimatedText delay={itemDelay + 0.1} duration={0.2} blurAmount="2px">
            Open
          </AnimatedText>
        </button>
      </motion.div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="max-h-[90vh]">
          <DrawerHeader className="relative">
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DrawerHeader>
          <div className="overflow-y-auto px-4 pb-6 max-w-md mx-auto">
            <AppDetailsContent app={app} />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function AppDetailsContent({ app }: { app: App }) {
  const links = [
    {
      link: "/",
      name: "Website",
      Logo: <Globe />,
    },
    {
      link: "/",
      name: "Support",
      Logo: <Headphones />,
    },
  ];

  return (
    <section className="flex flex-col w-full gap-y-5">
      {/* Main Image Card with Animated Background */}
      <motion.div
        className="relative h-[300px] w-full rounded-lg items-center justify-center flex flex-col gap-y-5 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.05,
          type: "spring",
          stiffness: 150,
          damping: 18,
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
            opacity: { delay: 0.1, duration: 0.2 },
            background: {
              delay: 0.2,
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* Content */}
        <motion.img
          src={app.image}
          className="w-[120px] h-[120px] object-cover relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.15,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        />
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 150,
            damping: 15,
          }}
        >
          <AnimatedText
            as="p"
            className="text-4xl font-bold"
            delay={0.25}
            duration={0.3}
          >
            {app.name}
          </AnimatedText>
        </motion.div>
      </motion.div>

      {/* Overview Section */}
      <motion.div
        className="flex flex-col gap-y-2"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.2 }}
        >
          <AnimatedText
            as="h3"
            className="text-xl font-bold"
            delay={0.38}
            duration={0.3}
            blurAmount="3px"
          >
            Overview
          </AnimatedText>
        </motion.div>
        <motion.div
          className="bg-[#252525] p-5 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.25 }}
        >
          <AnimatedText as="p" className="text-lg" delay={0.43} duration={0.3}>
            {app.description}
          </AnimatedText>
        </motion.div>
      </motion.div>

      {/* Links Section */}
      <motion.div
        className="flex flex-col gap-y-2"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.48,
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.52, duration: 0.2 }}
        >
          <AnimatedText
            as="h3"
            className="text-xl font-bold"
            delay={0.55}
            duration={0.3}
            blurAmount="3px"
          >
            Links
          </AnimatedText>
        </motion.div>
        <div className="flex gap-x-2">
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.58 + index * 0.04,
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
            >
              <LinkPill
                link={link.link}
                name={link.name}
                Logo={link.Logo}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Open App Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.25 }}
      >
        <Button
          className="w-full h-12"
          onClick={() => {
            window.open(app.link, "_blank");
          }}
        >
          <AnimatedText delay={0.68} duration={0.25} blurAmount="2px">
            Open App
          </AnimatedText>
        </Button>
      </motion.div>
    </section>
  );
}

function LinkPill({
  link,
  name,
  Logo,
  index,
}: {
  link: string;
  name: string;
  Logo: React.ReactNode;
  index: number;
}) {
  return (
    <Link
      to={link}
      className="bg-[#252525] h-11 px-4 flex items-center gap-x-2 rounded-full"
    >
      {Logo}
      <AnimatedText
        as="p"
        className="text-sm"
        delay={0.6 + index * 0.05}
        duration={0.25}
        blurAmount="2px"
      >
        {name}
      </AnimatedText>
    </Link>
  );
}
