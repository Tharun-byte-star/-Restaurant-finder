import { Star, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface RestaurantCardProps {
  index?: number
}

export default function RestaurantCard({ index = 0 }: RestaurantCardProps) {
  // Array of restaurant types for variety
  const restaurantTypes = [
    "Italian Restaurant",
    "Sushi Bar",
    "Mexican Cantina",
    "Indian Cuisine",
    "American Diner",
    "French Bistro",
    "Thai Restaurant",
    "Mediterranean Grill",
    "Steakhouse",
  ]

  // Array of restaurant names for variety
  const restaurantNames = [
    "Bella Italia",
    "Sakura Sushi",
    "El Mariachi",
    "Taj Mahal",
    "Classic Diner",
    "Le Petit Bistro",
    "Thai Orchid",
    "Olive Garden",
    "Prime Steakhouse",
  ]

  const cuisines = [
    "Italian",
    "Japanese",
    "Mexican",
    "Indian",
    "American",
    "French",
    "Thai",
    "Mediterranean",
    "Steakhouse",
  ]

  const ratings = [4.8, 4.7, 4.6, 4.9, 4.5, 4.7, 4.8, 4.6, 4.9]

  const distances = ["0.8", "1.2", "0.5", "1.7", "0.3", "1.0", "0.7", "1.5", "0.9"]

  const prices = ["$", "$$", "$", "$$", "$", "$$", "$", "$", "$$"]

  // Real image URLs for restaurant types
  const imageUrls = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=350&fit=crop",
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=350&fit=crop",
    "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500&h=350&fit=crop",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=350&fit=crop",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=350&fit=crop",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=350&fit=crop",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&h=350&fit=crop",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&h=350&fit=crop",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&h=350&fit=crop",
  ]

  return (
    <Link href="/restaurant/1" className="group">
      <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrls[index % imageUrls.length] || "/placeholder.svg"}
            alt={restaurantTypes[index % restaurantTypes.length]}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <Badge className="bg-primary">Top Rated</Badge>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold truncate">{restaurantNames[index % restaurantNames.length]}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm font-medium">{ratings[index % ratings.length]}</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <span className="mr-2">{cuisines[index % cuisines.length]}</span>
            <span>{prices[index % prices.length]}</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground mb-1">
            <MapPin className="h-3 w-3 mr-1 text-primary" />
            <span>{distances[index % distances.length]} miles away</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1 text-primary" />
            <span>Open until 10:00 PM</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
