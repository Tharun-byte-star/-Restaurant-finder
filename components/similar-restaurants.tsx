import { Star } from "lucide-react"
import Link from "next/link"

export default function SimilarRestaurants() {
  // Sample restaurant names
  const restaurantNames = ["Milano Restaurant", "Roma Trattoria", "Napoli Pizzeria"]

  // Sample ratings
  const ratings = [4.0, 4.2, 3.9]

  // Sample review counts
  const reviewCounts = [156, 98, 124]

  // Sample distances
  const distances = [1.5, 2.1, 0.8]

  // Sample restaurant images
  const restaurantImages = [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=60&h=60&fit=crop",
    "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=60&h=60&fit=crop",
    "https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=60&h=60&fit=crop",
  ]

  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Link key={i} href="/restaurant/2" className="flex gap-3 group">
          <img
            src={restaurantImages[i] || "/placeholder.svg"}
            alt={`${restaurantNames[i]}`}
            className="w-14 h-14 object-cover rounded-md"
          />
          <div className="flex-1">
            <h4 className="font-medium group-hover:text-primary truncate">{restaurantNames[i]}</h4>
            <div className="flex items-center text-xs">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`h-3 w-3 ${j < Math.floor(ratings[i]) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="ml-1 text-muted-foreground">
                {ratings[i]} ({reviewCounts[i]})
              </span>
            </div>
            <div className="text-xs text-muted-foreground">Italian • {distances[i]} miles</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
