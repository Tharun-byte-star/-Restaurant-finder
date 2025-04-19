import { Star } from "lucide-react"
import Link from "next/link"

export default function SimilarRestaurants() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Link key={i} href="/restaurant/2" className="flex gap-3 group">
          <img
            src={`/placeholder.svg?height=60&width=60&text=Rest ${i + 1}`}
            alt={`Similar restaurant ${i + 1}`}
            className="w-14 h-14 object-cover rounded-md"
          />
          <div className="flex-1">
            <h4 className="font-medium group-hover:text-primary truncate">Milano Restaurant</h4>
            <div className="flex items-center text-xs">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`h-3 w-3 ${j < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} />
                ))}
              </div>
              <span className="ml-1 text-muted-foreground">4.0 (156)</span>
            </div>
            <div className="text-xs text-muted-foreground">Italian • 1.5 miles</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
