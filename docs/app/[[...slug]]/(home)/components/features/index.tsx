import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Code2, 
  Rocket, 
  Zap, 
  Shield, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Palette,
    title: 'Custom UI Components',
    description: 'Beautifully crafted, accessible components built on shadcn/ui with your brand in mind.',
    features: ['50+ Premium Components', 'Full TypeScript Support', 'Dark Mode Ready', 'Accessibility First'],
    gradient: 'from-blue-500 to-cyan-500',
    href: '/components'
  },
  {
    icon: Code2,
    title: 'Pro Templates',
    description: 'Complete application templates ready for production deployment and customization.',
    features: ['20+ Template Designs', 'Next.js 15 Ready', 'Database Included', 'Auth Pre-configured'],
    gradient: 'from-purple-500 to-pink-500',
    href: '/templates'
  },
  {
    icon: Rocket,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using modern technologies and best practices.',
    features: ['React & Next.js', 'TypeScript First', 'Database Design', 'API Development'],
    gradient: 'from-green-500 to-emerald-500',
    href: '/services/development'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your applications with advanced optimization techniques and monitoring.',
    features: ['Core Web Vitals', 'Bundle Analysis', 'SEO Optimization', 'Performance Monitoring'],
    gradient: 'from-orange-500 to-red-500',
    href: '/services/optimization'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Implement robust security measures and ensure compliance with industry standards.',
    features: ['Security Audits', 'GDPR Compliance', 'Authentication', 'Data Protection'],
    gradient: 'from-indigo-500 to-blue-500',
    href: '/services/security'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive designs that work perfectly across all devices and screen sizes.',
    features: ['Responsive Design', 'PWA Support', 'Touch Optimized', 'Cross-Platform'],
    gradient: 'from-pink-500 to-rose-500',
    href: '/services/mobile'
  }
];

export const Features = () => (
  <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/20" id="services">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
          Our Services
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Everything You Need to Build Amazing Web Apps
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          From custom UI components to full-stack development, we provide comprehensive solutions 
          for modern web applications using cutting-edge technologies.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="group relative overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link href={service.href} className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 sm:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements and see how we can help 
            bring your vision to life with modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
