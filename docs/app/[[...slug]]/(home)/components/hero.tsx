import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import { ArrowRight, Sparkles, Code, Palette, Zap } from 'lucide-react';

const HrevLogo = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Hrev Dev</title>
    <defs>
      <linearGradient id="hrev-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <rect x="10" y="20" width="15" height="60" rx="2" fill="url(#hrev-gradient)" />
    <rect x="30" y="35" width="15" height="45" rx="2" fill="url(#hrev-gradient)" />
    <rect x="50" y="25" width="15" height="55" rx="2" fill="url(#hrev-gradient)" />
    <rect x="70" y="40" width="15" height="40" rx="2" fill="url(#hrev-gradient)" />
    <circle cx="50" cy="15" r="8" fill="url(#hrev-gradient)" />
  </svg>
);

const FloatingIcon = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <div 
    className="absolute animate-bounce opacity-20 pointer-events-none"
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: '3s'
    }}
  >
    {children}
  </div>
);

export const Hero = () => (
  <section className="relative flex flex-col items-center justify-center gap-8 bg-dashed px-4 py-20 sm:px-16 sm:py-32 overflow-hidden">
    {/* Floating Background Icons */}
    <FloatingIcon delay={0}>
      <Code className="w-12 h-12 text-blue-500 absolute -top-10 -left-20" />
    </FloatingIcon>
    <FloatingIcon delay={1}>
      <Palette className="w-10 h-10 text-purple-500 absolute top-20 right-10" />
    </FloatingIcon>
    <FloatingIcon delay={2}>
      <Zap className="w-8 h-8 text-pink-500 absolute -bottom-5 left-1/4" />
    </FloatingIcon>
    <FloatingIcon delay={1.5}>
      <Sparkles className="w-14 h-14 text-indigo-500 absolute top-5 right-1/4" />
    </FloatingIcon>

    {/* Announcement Badge */}
    <div className="inline-flex overflow-hidden w-full sm:w-fit items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm py-1 pr-3 pl-1 text-foreground text-sm leading-6 shadow-lg">
      <Badge variant="secondary" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
        New
      </Badge>
      <span className="font-medium truncate">
        🚀 Custom UI Component Library & Pro Templates Available
      </span>
    </div>

    {/* Main Heading */}
    <div className="text-center space-y-6">
      <h1 className="max-w-4xl text-balance text-center font-bold text-5xl leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:leading-[1.1] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        <HrevLogo className="pointer-events-none mx-2 inline-block h-12 w-auto translate-y-1 select-none align-baseline sm:h-16 md:h-20" />
        Hrev Dev
      </h1>
      <h2 className="max-w-3xl text-balance text-center font-semibold text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl text-foreground">
        Premium Web Development Agency
      </h2>
    </div>

    {/* Subtitle */}
    <p className="max-w-2xl text-balance text-center text-muted-foreground text-lg md:text-xl leading-relaxed">
      We craft exceptional digital experiences with cutting-edge technology. 
      From custom UI components to complete web applications, we bring your vision to life.
    </p>

    {/* Feature Pills */}
    <div className="flex flex-wrap justify-center gap-3 text-sm">
      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
        React & Next.js
      </Badge>
      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">
        Custom Components
      </Badge>
      <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800">
        Pro Templates
      </Badge>
      <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">
        Turborepo
      </Badge>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
      <Button 
        asChild 
        size="lg" 
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <Link href="/components" className="flex items-center gap-2">
          Explore Components
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg" className="border-2 hover:bg-muted/50">
        <Link href="/templates">
          View Templates
        </Link>
      </Button>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-8 mt-12 text-center">
      <div>
        <div className="font-bold text-2xl text-foreground">50+</div>
        <div className="text-sm text-muted-foreground">UI Components</div>
      </div>
      <div>
        <div className="font-bold text-2xl text-foreground">20+</div>
        <div className="text-sm text-muted-foreground">Pro Templates</div>
      </div>
      <div>
        <div className="font-bold text-2xl text-foreground">100%</div>
        <div className="text-sm text-muted-foreground">TypeScript</div>
      </div>
    </div>
  </section>
);
