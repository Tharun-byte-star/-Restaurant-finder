import { Star, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function RestaurantCard() {
  return (
    <Link href="/restaurant/1" className="group">
      <div className="overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
        <div className="relative h-48 overflow-hidden">
          <img
            src="/placeholder.svg?height=200&width=300"
            alt="Restaurant"
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <Badge className="bg-primary">Top Rated</Badge>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold truncate">Bella Italia Restaurant</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm font-medium">4.8</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <span className="mr-2">Italian</span>
            <span>$$</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground mb-1">
            <MapPin className="h-3 w-3 mr-1" />
            <span>1.2 miles away</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            <span>Open until 10:00 PM</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
