import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function RestaurantMenu() {
  // Array of food items for variety
  const foodItems = [
    {
      name: "Spaghetti Carbonara",
      description: "Spaghetti with crispy pancetta, egg, parmesan cheese, and black pepper.",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=80&h=80&fit=crop",
    },
    {
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, fresh mozzarella, and basil.",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=80&h=80&fit=crop",
    },
    {
      name: "Lasagna",
      description: "Layers of pasta, ricotta cheese, ground beef, and tomato sauce.",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=80&h=80&fit=crop",
    },
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=80&h=80&fit=crop",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search menu items..." className="w-full pl-8 bg-white" />
      </div>

      <Tabs defaultValue="popular">
        <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6">
          <TabsTrigger
            value="popular"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
          >
            Popular
          </TabsTrigger>
          <TabsTrigger
            value="appetizers"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
          >
            Appetizers
          </TabsTrigger>
          <TabsTrigger
            value="pasta"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
          >
            Pasta
          </TabsTrigger>
          <TabsTrigger
            value="pizza"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
          >
            Pizza
          </TabsTrigger>
          <TabsTrigger
            value="desserts"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
          >
            Desserts
          </TabsTrigger>
          <TabsTrigger
            value="drinks"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
          >
            Drinks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="popular" className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-4">Most Popular Items</h3>
            <div className="space-y-4">
              {foodItems.map((item, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.name}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        {i === 0 && <Badge className="mt-1 bg-primary">Most Popular</Badge>}
                      </div>
                      <div className="font-medium">{item.price}</div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
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
              {[
                {
                  name: "Bruschetta",
                  description: "Toasted bread topped with fresh tomatoes, basil, garlic, and olive oil.",
                  price: "$9.99",
                  image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=80&h=80&fit=crop",
                },
                {
                  name: "Caprese Salad",
                  description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
                  price: "$11.99",
                  image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=80&h=80&fit=crop",
                },
                {
                  name: "Calamari Fritti",
                  description: "Crispy fried calamari served with marinara sauce.",
                  price: "$13.99",
                  image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=80&h=80&fit=crop",
                },
                {
                  name: "Antipasto Platter",
                  description: "Selection of Italian meats, cheeses, olives, and marinated vegetables.",
                  price: "$16.99",
                  image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a9c?w=80&h=80&fit=crop",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.name}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{item.name}</h4>
                      <div className="font-medium">{item.price}</div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
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
