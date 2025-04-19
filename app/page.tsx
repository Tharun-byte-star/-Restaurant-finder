import { Search } from "lucide-react"
import Link from "next/link"
import RestaurantCard from "@/components/restaurant-card"
import FilterSidebar from "@/components/filter-sidebar"
import FeaturedRestaurants from "@/components/featured-restaurants"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header - Applying Primality, Visibility of System Status */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">TasteFinder</span>
          </Link>

          {/* Search Bar - Applying Recognition over Recall, Flexibility and Efficiency */}
          <div className="relative w-full max-w-md mx-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search restaurants, cuisines, or locations..."
              className="w-full pl-8 bg-background"
            />
          </div>

          <nav className="flex items-center gap-4">
            <Link href="/favorites" className="text-sm font-medium hover:underline">
              Favorites
            </Link>
            <Link href="/recent" className="text-sm font-medium hover:underline">
              Recent
            </Link>
            <Button>Sign In</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Applying Visual Hierarchy, Dominance, Visceral Reactions */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img
          src="/placeholder.svg?height=500&width=1200"
          alt="Delicious food spread"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Discover Your Next Favorite Restaurant</h1>
          <p className="text-xl text-center mb-8 max-w-2xl">
            Find the perfect dining experience based on cuisine, location, and preferences
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Find Nearby
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Popular Choices
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Filters - Applying Recency, Serial Position Effect, Flexibility */}
      <section className="container py-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Quick Filters</h2>
          <Button variant="ghost" size="sm">
            Clear All
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
            Italian
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
            Japanese
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
            Mexican
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
            Vegetarian
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
            Open Now
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
            Delivery
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
            Outdoor Seating
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
            $$
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
            $$$
          </Badge>
          <Badge variant="secondary" className="cursor-pointer">
            + More Filters
          </Badge>
        </div>
      </section>

      {/* Featured Restaurants - Applying Social Proof, Authority */}
      <section className="container py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Restaurants</h2>
        <FeaturedRestaurants />
      </section>

      {/* Main Content - Applying Gestalt Principles, Mental Models */}
      <main className="container py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - Applying Consistency, Flexibility */}
          <aside className="w-full md:w-64 shrink-0">
            <FilterSidebar />
          </aside>

          {/* Restaurant Listings - Applying Closure, Proximity, Similarity */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Restaurants Near You</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm border rounded p-1">
                  <option>Relevance</option>
                  <option>Rating</option>
                  <option>Distance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <RestaurantCard key={i} />
              ))}
            </div>

            {/* Pagination - Applying Feedback, User Control */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center gap-1">
                <Button variant="outline" size="icon" disabled>
                  <span className="sr-only">Previous page</span>
                  <span aria-hidden="true">←</span>
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  4
                </Button>
                <Button variant="outline" size="sm">
                  5
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Next page</span>
                  <span aria-hidden="true">→</span>
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      {/* Help Section - Applying User Support Principles */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6 text-center">Need Help Finding the Perfect Spot?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Restaurant Recommendations</h3>
              <p className="text-muted-foreground mb-4">
                Get personalized suggestions based on your preferences and past visits
              </p>
              <Button variant="outline" className="w-full">
                Get Recommendations
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Dietary Restrictions</h3>
              <p className="text-muted-foreground mb-4">Find restaurants that cater to your specific dietary needs</p>
              <Button variant="outline" className="w-full">
                Set Preferences
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Special Occasions</h3>
              <p className="text-muted-foreground mb-4">
                Discover perfect venues for birthdays, anniversaries, and other events
              </p>
              <Button variant="outline" className="w-full">
                Plan an Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Applying Closure, Completeness */}
      <footer className="bg-background border-t py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">TasteFinder</h3>
            <p className="text-muted-foreground">Discover and enjoy the best restaurants in your area.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Top Rated
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Cuisines
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <p className="text-center text-muted-foreground">© 2025 TasteFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
