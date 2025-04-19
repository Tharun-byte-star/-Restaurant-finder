import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function RestaurantMenu() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search menu items..." className="w-full pl-8 bg-background" />
      </div>

      <Tabs defaultValue="popular">
        <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
          <TabsTrigger
            value="popular"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Popular
          </TabsTrigger>
          <TabsTrigger
            value="appetizers"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Appetizers
          </TabsTrigger>
          <TabsTrigger
            value="pasta"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Pasta
          </TabsTrigger>
          <TabsTrigger
            value="pizza"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Pizza
          </TabsTrigger>
          <TabsTrigger
            value="desserts"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Desserts
          </TabsTrigger>
          <TabsTrigger
            value="drinks"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            Drinks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="popular" className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-4">Most Popular Items</h3>
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50">
                  <img
                    src={`/placeholder.svg?height=80&width=80&text=Food ${i + 1}`}
                    alt={`Menu item ${i + 1}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Spaghetti Carbonara</h4>
                        {i === 0 && <Badge className="mt-1 bg-primary">Most Popular</Badge>}
                      </div>
                      <div className="font-medium">$16.99</div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Spaghetti with crispy pancetta, egg, parmesan cheese, and black pepper.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="appetizers" className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-4">Appetizers</h3>
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50">
                  <img
                    src={`/placeholder.svg?height=80&width=80&text=App ${i + 1}`}
                    alt={`Appetizer ${i + 1}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Bruschetta</h4>
                      <div className="font-medium">$9.99</div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Toasted bread topped with fresh tomatoes, basil, garlic, and olive oil.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
      </Tabs>
    </div>
  )
}
