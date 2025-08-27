import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from './utils/cn';

export const Tabs = TabsPrimitive.Root;

export const TabsList = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List className={cn('inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground', className)} {...props} />
);

export const TabsTrigger = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger className={cn('inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow', className)} {...props} />
);

export const TabsContent = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content className={cn('mt-2 ring-offset-background focus-visible:outline-none', className)} {...props} />
);

