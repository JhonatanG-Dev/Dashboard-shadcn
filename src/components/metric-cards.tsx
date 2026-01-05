import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown, Users, DollarSign, Activity, TrendingUp } from "lucide-react"

const metrics = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "2,345",
    change: "+15.3%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-2.4%",
    trend: "down",
    icon: Activity,
  },
  {
    title: "Growth",
    value: "12.5%",
    change: "+8.2%",
    trend: "up",
    icon: TrendingUp,
  },
]

export function MetricCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const TrendIcon = metric.trend === "up" ? ArrowUp : ArrowDown
        const trendColor = metric.trend === "up" ? "text-accent" : "text-destructive"

        return (
          <Card key={metric.title} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground font-medium">{metric.title}</span>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <div className={`flex items-center gap-1 text-sm font-medium ${trendColor}`}>
                  <TrendIcon className="h-4 w-4" />
                  <span>{metric.change}</span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
