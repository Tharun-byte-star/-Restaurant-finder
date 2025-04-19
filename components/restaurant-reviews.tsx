import { Star, ThumbsUp, Flag } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function RestaurantReviews() {
  // Sample reviewer names
  const reviewers = ["John D.", "Sarah M.", "Michael T."]

  // Sample review texts
  const reviewTexts = [
    "Absolutely loved the authentic Italian flavors! The pasta was cooked to perfection and the service was impeccable. Will definitely be coming back soon with friends and family.",
    "Great atmosphere and delicious food. The wine selection perfectly complemented our meal. Prices are reasonable for the quality you get.",
    "Decent food but the service was a bit slow. The ambiance is nice though, and they were very accommodating of our dietary restrictions.",
  ]

  // Sample times
  const times = ["2 weeks ago", "1 month ago", "3 days ago"]

  // Sample avatar images
  const avatarImages = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/75.jpg",
  ]

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
                  <AvatarImage src={avatarImages[i] || "/placeholder.svg"} />
                  <AvatarFallback>{reviewers[i].charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{reviewers[i]}</div>
                  <div className="text-xs text-muted-foreground">{12 - i * 3} reviews</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{times[i]}</div>
            </div>

            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className={`h-4 w-4 ${j < 5 - (i % 2) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                />
              ))}
            </div>

            <p className="text-sm mb-3">{reviewTexts[i]}</p>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="h-8 gap-1 text-primary hover:bg-primary/10">
                <ThumbsUp className="h-4 w-4" />
                <span>Helpful ({12 - i * 3})</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 gap-1 hover:bg-primary/10">
                <Flag className="h-4 w-4" />
                <span>Report</span>
              </Button>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white">
          Load More Reviews
        </Button>
      </div>
    </div>
  )
}
