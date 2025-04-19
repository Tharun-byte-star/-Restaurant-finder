import { Star, ThumbsUp, Flag } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function RestaurantReviews() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Reviews</h2>
        <Button>Write a Review</Button>
      </div>

      <div className="flex items-center gap-8 p-4 bg-muted/50 rounded-lg">
        <div className="text-center">
          <div className="text-4xl font-bold">4.8</div>
          <div className="flex justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-sm text-muted-foreground">324 reviews</div>
        </div>

        <div className="flex-1">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="text-sm">5</div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full w-[85%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm">4</div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full w-[10%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm">3</div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full w-[3%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm">2</div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full w-[1%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm">1</div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="bg-yellow-400 h-full w-[1%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Reviews - Applying Social Proof */}
      <div className="space-y-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="border-b pb-6">
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&text=User`} />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">User Name</div>
                  <div className="text-xs text-muted-foreground">12 reviews</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">2 weeks ago</div>
            </div>

            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className={`h-4 w-4 ${j < 5 - (i % 2) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                />
              ))}
            </div>

            <p className="text-sm mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dolor libero. Nulla at metus sed
              lacus congue luctus vel non mauris. Vestibulum non mi quam. Curabitur dictum, nulla id tempor elementum,
              purus sapien vulputate arcu, nec finibus augue velit at nibh.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="h-8 gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>Helpful (12)</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 gap-1">
                <Flag className="h-4 w-4" />
                <span>Report</span>
              </Button>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full">
          Load More Reviews
        </Button>
      </div>
    </div>
  )
}
