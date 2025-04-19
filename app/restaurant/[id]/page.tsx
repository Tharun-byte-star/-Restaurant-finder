import { ArrowLeft, Clock, MapPin, Star, Utensils, DollarSign, Heart, Share2, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import RestaurantReviews from "@/components/restaurant-reviews"
import RestaurantMenu from "@/components/restaurant-menu"
import RestaurantMap from "@/components/restaurant-map"
import SimilarRestaurants from "@/components/similar-restaurants"

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-[#fffaf0]">
      {/* Back Navigation - Applying User Control and Freedom */}
      <div className="container py-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to search results
        </Link>
      </div>

      {/* Restaurant Hero - Applying Visual Hierarchy, Visceral Reactions */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1514516345957-556ca7c90a34?w=1200&h=400&fit=crop"
          alt="Restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 flex flex-col justify-end h-full pb-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-primary">Top Rated</Badge>
                <Badge variant="outline" className="text-white border-white">
                  Open Now
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">Bella Italia Restaurant</h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>4.8 (324 reviews)</span>
                </div>
                <div className="flex items-center">
                  <Utensils className="h-4 w-4 mr-1" />
                  <span>Italian</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span>$$</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="rounded-full text-white border-white hover:bg-white/10">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to favorites</span>
              </Button>
              <Button size="icon" variant="outline" className="rounded-full text-white border-white hover:bg-white/10">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info - Applying Gestalt Principles, Proximity */}
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* Quick Info - Applying Vital Few, Chunking */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center p-4 border rounded-lg bg-white">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <div>
                  <h3 className="text-sm font-medium">Location</h3>
                  <p className="text-sm text-muted-foreground">123 Main Street, City</p>
                </div>
              </div>
              <div className="flex items-center p-4 border rounded-lg bg-white">
                <Clock className="h-5 w-5 text-primary mr-3" />
                <div>
                  <h3 className="text-sm font-medium">Hours</h3>
                  <p className="text-sm text-muted-foreground">11:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center p-4 border rounded-lg bg-white">
                <Calendar className="h-5 w-5 text-primary mr-3" />
                <div>
                  <h3 className="text-sm font-medium">Reservations</h3>
                  <p className="text-sm text-muted-foreground">Available</p>
                </div>
              </div>
            </div>

            {/* Tabs - Applying Mental Models, Consistency */}
            <Tabs defaultValue="about" className="bg-white p-6 rounded-lg">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                <TabsTrigger
                  value="about"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="menu"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
                >
                  Menu
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger
                  value="photos"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
                >
                  Photos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-2">About Bella Italia</h2>
                    <p className="text-muted-foreground">
                      Bella Italia offers authentic Italian cuisine in a warm, inviting atmosphere. Our chefs use only
                      the freshest ingredients to create traditional dishes with a modern twist. From hand-made pasta to
                      wood-fired pizzas, every dish is crafted with care and passion.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-primary/30">
                        Outdoor Seating
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        Takeout
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        Delivery
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        Reservations
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        Wheelchair Accessible
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        Full Bar
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        Private Dining
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Location & Hours</h3>
                    <RestaurantMap />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium">Monday - Thursday</h4>
                        <p className="text-muted-foreground">11:00 AM - 10:00 PM</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Friday - Saturday</h4>
                        <p className="text-muted-foreground">11:00 AM - 11:00 PM</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Sunday</h4>
                        <p className="text-muted-foreground">12:00 PM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="menu" className="pt-6">
                <RestaurantMenu />
              </TabsContent>

              <TabsContent value="reviews" className="pt-6">
                <RestaurantReviews />
              </TabsContent>

              <TabsContent value="photos" className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300&h=200&fit=crop",
                    "https://images.unsplash.com/photo-1505932794267-0f67586e200d?w=300&h=200&fit=crop",
                    "https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?w=300&h=200&fit=crop",
                    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&h=200&fit=crop",
                    "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=300&h=200&fit=crop",
                    "https://images.unsplash.com/photo-1560611588-163f49a6cbe9?w=300&h=200&fit=crop",
                    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop",
                    "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=300&h=200&fit=crop",
                    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=200&fit=crop",
                  ].map((url, i) => (
                    <img
                      key={i}
                      src={url || "/placeholder.svg"}
                      alt={`Restaurant photo ${i + 1}`}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Applying Scarcity, Call to Action */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="sticky top-20">
              <div className="border rounded-lg p-6 mb-6 bg-white">
                <h3 className="text-lg font-bold mb-4">Make a Reservation</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Date</label>
                    <input type="date" className="w-full mt-1 p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Time</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                      <option>8:30 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Party Size</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                      <option>1 person</option>
                      <option>2 people</option>
                      <option>3 people</option>
                      <option>4 people</option>
                      <option>5 people</option>
                      <option>6+ people</option>
                    </select>
                  </div>
                  <Button className="w-full">Reserve Now</Button>
                  <p className="text-xs text-center text-muted-foreground">
                    <span className="text-primary font-medium">Booked 36 times</span> today
                  </p>
                </div>
              </div>

              <div className="border rounded-lg p-6 bg-white">
                <h3 className="text-lg font-bold mb-4">Similar Restaurants</h3>
                <SimilarRestaurants />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
