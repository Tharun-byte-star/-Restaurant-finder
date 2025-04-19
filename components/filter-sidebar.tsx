import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function FilterSidebar() {
  return (
    <div className="space-y-6">
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
          <Button variant="outline" size="sm" className="flex-1">
            $
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            $$
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            $$$
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            $$$$
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Cuisine</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="italian" />
            <label htmlFor="italian" className="text-sm">
              Italian
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="japanese" />
            <label htmlFor="japanese" className="text-sm">
              Japanese
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="mexican" />
            <label htmlFor="mexican" className="text-sm">
              Mexican
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="indian" />
            <label htmlFor="indian" className="text-sm">
              Indian
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="chinese" />
            <label htmlFor="chinese" className="text-sm">
              Chinese
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="american" />
            <label htmlFor="american" className="text-sm">
              American
            </label>
          </div>
          <Button variant="link" size="sm" className="px-0">
            + Show more
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Features</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="outdoor" />
            <label htmlFor="outdoor" className="text-sm">
              Outdoor Seating
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="delivery" />
            <label htmlFor="delivery" className="text-sm">
              Delivery
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="takeout" />
            <label htmlFor="takeout" className="text-sm">
              Takeout
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="reservations" />
            <label htmlFor="reservations" className="text-sm">
              Reservations
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="wheelchair" />
            <label htmlFor="wheelchair" className="text-sm">
              Wheelchair Accessible
            </label>
          </div>
          <Button variant="link" size="sm" className="px-0">
            + Show more
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Dietary Restrictions</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="vegetarian" />
            <label htmlFor="vegetarian" className="text-sm">
              Vegetarian
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="vegan" />
            <label htmlFor="vegan" className="text-sm">
              Vegan
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="gluten-free" />
            <label htmlFor="gluten-free" className="text-sm">
              Gluten Free
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="dairy-free" />
            <label htmlFor="dairy-free" className="text-sm">
              Dairy Free
            </label>
          </div>
          <Button variant="link" size="sm" className="px-0">
            + Show more
          </Button>
        </div>
      </div>

      <div className="pt-4 flex gap-2">
        <Button className="flex-1">Apply Filters</Button>
        <Button variant="outline" className="flex-1">
          Reset
        </Button>
      </div>
    </div>
  )
}
