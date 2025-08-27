import { Button } from '@/components/ui/button';
import { StarIcon } from 'lucide-react';

export const OpenSource = () => {
  return (
    <div className="flex h-full flex-col items-start justify-between gap-4 p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <StarIcon size={14} />
          <small>Open source</small>
        </div>
        <p className="font-semibold text-xl tracking-tight">
          Hrev Dev is 100% open source and maintained by our community of developers.
        </p>
      </div>
      <Button asChild variant="outline">
        <a
          href="https://github.com/hrev-dev/agency"
          target="_blank"
          rel="noopener noreferrer"
        >
          Browse the source code
        </a>
      </Button>
    </div>
  );
};
