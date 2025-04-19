import { MapPin } from "lucide-react"

export default function RestaurantMap() {
  return (
    <div className="relative h-48 bg-muted rounded-lg overflow-hidden">
      <img
        src="/placeholder.svg?height=200&width=600&text=Map"
        alt="Restaurant location map"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-primary text-primary-foreground rounded-full p-2">
          <MapPin className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}
