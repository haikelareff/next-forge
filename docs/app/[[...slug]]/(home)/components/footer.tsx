import Link from 'next/link';
import { Github, Twitter, Mail, Heart } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-gradient-to-t from-muted/50 to-background border-t">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg"></div>
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hrev Dev
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Premium web development agency specializing in modern React applications and custom UI components.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/hrevdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/hrevdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@hrevdev.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/components" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                UI Components
              </Link>
            </li>
            <li>
              <Link href="/templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pro Templates
              </Link>
            </li>
            <li>
              <Link href="/pro" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Hrev Dev Pro
              </Link>
            </li>
            <li>
              <Link href="/enterprise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Enterprise
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services/development" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services/design" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="/services/consulting" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Consulting
              </Link>
            </li>
            <li>
              <Link href="/services/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Examples
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Hrev Dev Team
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <span>© 2024 Hrev Dev. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
