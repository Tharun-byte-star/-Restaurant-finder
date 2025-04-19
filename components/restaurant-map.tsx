import { MapPin } from "lucide-react"

export default function RestaurantMap() {
  return (
    <div className="relative h-48 bg-muted rounded-lg overflow-hidden">
      <img
        src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+e74c3c(0,0)/0,0,13,0/600x200?access_token=pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2xnNXBtcm5xMDAxMDNkcGF4Z2dpejM0eiJ9.3Vt5JvKkXFBfbSbUlEQTOA"
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
