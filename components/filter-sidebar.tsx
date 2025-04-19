import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function FilterSidebar() {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg border">
      <div>
        <h3 className="font-bold mb-3">Distance</h3>
        <Slider defaultValue={[5]} max={20} step={1} className="mb-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0 miles</span>
          <span>5 miles</span>
          <span>20+ miles</span>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Price Range</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            $
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            $$
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            $$$
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            $$$$
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Cuisine</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="italian"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="italian" className="text-sm">
              Italian
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="japanese"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="japanese" className="text-sm">
              Japanese
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="mexican"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="mexican" className="text-sm">
              Mexican
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="indian"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="indian" className="text-sm">
              Indian
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="chinese"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="chinese" className="text-sm">
              Chinese
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="american"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="american" className="text-sm">
              American
            </label>
          </div>
          <Button variant="link" size="sm" className="px-0 text-primary">
            + Show more
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Features</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="outdoor"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="outdoor" className="text-sm">
              Outdoor Seating
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="delivery"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="delivery" className="text-sm">
              Delivery
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="takeout"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="takeout" className="text-sm">
              Takeout
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="reservations"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="reservations" className="text-sm">
              Reservations
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="wheelchair"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="wheelchair" className="text-sm">
              Wheelchair Accessible
            </label>
          </div>
          <Button variant="link" size="sm" className="px-0 text-primary">
            + Show more
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Dietary Restrictions</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="vegetarian"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="vegetarian" className="text-sm">
              Vegetarian
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="vegan"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="vegan" className="text-sm">
              Vegan
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="gluten-free"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="gluten-free" className="text-sm">
              Gluten Free
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="dairy-free"
              className="text-primary border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label htmlFor="dairy-free" className="text-sm">
              Dairy Free
            </label>
          </div>
          <Button variant="link" size="sm" className="px-0 text-primary">
            + Show more
          </Button>
        </div>
      </div>

      <div className="pt-4 flex gap-2">
        <Button className="flex-1">Apply Filters</Button>
        <Button variant="outline" className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-white">
          Reset
        </Button>
      </div>
    </div>
  )
}
