export const Footer = () => (
  <div className="bg-dashed">
    <div className="container mx-auto flex items-center justify-between p-8 text-muted-foreground">
      <p className="mx-auto block text-center text-sm">
        © {new Date().getFullYear()} Hrev Dev. Crafted with Next.js, Turborepo and shadcn/ui.{' '}
        <a
          href="https://github.com/hrev-dev/agency"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline"
        >
          View source
        </a>
        . All rights reserved.
      </p>
    </div>
  </div>
);
