import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import RestaurantCard from "./restaurant-card"

export default function FeaturedRestaurants() {
  return (
    <div className="relative">
      <div className="flex overflow-x-auto pb-4 -mx-4 px-4 gap-6 scrollbar-hide">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="min-w-[280px] max-w-[280px]">
            <RestaurantCard />
          </div>
        ))}
      </div>

      <Button
        size="icon"
        variant="outline"
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full hidden md:flex"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full hidden md:flex"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}
