import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar,
  Command,
  CreditCard,
  FileText,
  Mail,
  MessageSquare,
  Settings,
  User,
  ChevronRight,
  Star,
  Download,
  Eye
} from 'lucide-react';
import Link from 'next/link';

const componentCategories = [
  {
    id: 'form',
    label: 'Form Components',
    count: 12,
    components: [
      {
        name: 'Advanced Form Builder',
        description: 'Dynamic form builder with validation and conditional fields',
        icon: FileText,
        preview: 'Interactive form with real-time validation',
        tags: ['React Hook Form', 'Zod', 'TypeScript'],
        downloads: '2.3k',
        rating: 4.9
      },
      {
        name: 'Multi-step Wizard',
        description: 'Guided multi-step form with progress indication',
        icon: Settings,
        preview: 'Step-by-step user onboarding flow',
        tags: ['Multi-step', 'Progress', 'Validation'],
        downloads: '1.8k',
        rating: 4.8
      },
    ]
  },
  {
    id: 'data',
    label: 'Data Display',
    count: 15,
    components: [
      {
        name: 'Advanced Data Table',
        description: 'Feature-rich data table with sorting, filtering, and pagination',
        icon: FileText,
        preview: 'Sortable table with advanced filtering options',
        tags: ['TanStack Table', 'Sorting', 'Filtering'],
        downloads: '3.1k',
        rating: 4.9
      },
      {
        name: 'Interactive Calendar',
        description: 'Full-featured calendar with event management',
        icon: Calendar,
        preview: 'Monthly calendar view with event handling',
        tags: ['Calendar', 'Events', 'Date Picker'],
        downloads: '2.7k',
        rating: 4.7
      },
    ]
  },
  {
    id: 'navigation',
    label: 'Navigation',
    count: 8,
    components: [
      {
        name: 'Command Palette',
        description: 'Searchable command interface for quick actions',
        icon: Command,
        preview: 'Cmd+K style command palette',
        tags: ['Search', 'Commands', 'Keyboard'],
        downloads: '1.9k',
        rating: 4.8
      },
      {
        name: 'Breadcrumb Navigator',
        description: 'Hierarchical navigation with customizable styling',
        icon: ChevronRight,
        preview: 'Dynamic breadcrumb navigation',
        tags: ['Navigation', 'Hierarchy', 'Responsive'],
        downloads: '1.2k',
        rating: 4.6
      },
    ]
  },
  {
    id: 'feedback',
    label: 'Feedback',
    count: 10,
    components: [
      {
        name: 'Toast Notifications',
        description: 'Beautiful toast notifications with actions',
        icon: MessageSquare,
        preview: 'Animated toast messages',
        tags: ['Notifications', 'Toast', 'Actions'],
        downloads: '4.2k',
        rating: 4.9
      },
      {
        name: 'Rating Component',
        description: 'Interactive star rating with half-star support',
        icon: Star,
        preview: 'Star rating with hover effects',
        tags: ['Rating', 'Stars', 'Interactive'],
        downloads: '1.5k',
        rating: 4.7
      },
    ]
  }
];

const ComponentCard = ({ component }: { component: any }) => (
  <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-2 group-hover:scale-110 transition-transform duration-300">
            <component.icon className="w-full h-full text-white" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
              {component.name}
            </CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground">{component.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{component.downloads}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardDescription className="text-sm text-muted-foreground">
        {component.description}
      </CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="bg-muted/30 rounded-lg p-3 mb-4 text-xs text-muted-foreground border">
        <Eye className="w-3 h-3 inline mr-1" />
        {component.preview}
      </div>
      <div className="flex flex-wrap gap-1 mb-4">
        {component.tags.map((tag: string, index: number) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <Button asChild size="sm" className="flex-1">
          <Link href={`/components/${component.name.toLowerCase().replace(/\s+/g, '-')}`}>
            View Component
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link href={`/components/${component.name.toLowerCase().replace(/\s+/g, '-')}/demo`}>
            <Eye className="w-3 h-3" />
          </Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export const Showcase = () => (
  <section className="py-24 sm:py-32 bg-muted/20" id="components">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">
          Component Showcase
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Premium UI Components
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover our collection of beautifully designed, fully accessible components built on top of 
          shadcn/ui with advanced functionality and customization options.
        </p>
      </div>

      {/* Component Tabs */}
      <Tabs defaultValue="form" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
          {componentCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-sm">
              {category.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        {componentCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {category.components.map((component, index) => (
                <ComponentCard key={index} component={component} />
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href={`/components?category=${category.id}`} className="flex items-center gap-2">
                  View All {category.label}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
        <div>
          <div className="font-bold text-3xl text-foreground mb-2">50+</div>
          <div className="text-sm text-muted-foreground">Components</div>
        </div>
        <div>
          <div className="font-bold text-3xl text-foreground mb-2">15k+</div>
          <div className="text-sm text-muted-foreground">Downloads</div>
        </div>
        <div>
          <div className="font-bold text-3xl text-foreground mb-2">4.8</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div>
          <div className="font-bold text-3xl text-foreground mb-2">100%</div>
          <div className="text-sm text-muted-foreground">TypeScript</div>
        </div>
      </div>
    </div>
  </section>
);