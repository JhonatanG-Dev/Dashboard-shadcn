"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

const revenueData = [
  { month: "Jan", revenue: 2400, users: 1400 },
  { month: "Feb", revenue: 1398, users: 2210 },
  { month: "Mar", revenue: 9800, users: 2290 },
  { month: "Apr", revenue: 3908, users: 2000 },
  { month: "May", revenue: 4800, users: 2181 },
  { month: "Jun", revenue: 3800, users: 2500 },
  { month: "Jul", revenue: 4300, users: 2100 },
]

const activityData = [
  { day: "Mon", requests: 289 },
  { day: "Tue", requests: 456 },
  { day: "Wed", requests: 378 },
  { day: "Thu", requests: 520 },
  { day: "Fri", requests: 490 },
  { day: "Sat", requests: 310 },
  { day: "Sun", requests: 240 },
]

export function Charts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Revenue Overview</CardTitle>
          <CardDescription className="text-muted-foreground">Monthly revenue and user growth</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue",
                color: "hsl(var(--chart-1))",
              },
              users: {
                label: "Users",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[350px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--chart-1))"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="hsl(var(--chart-2))"
                  fillOpacity={1}
                  fill="url(#colorUsers)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Weekly Activity</CardTitle>
          <CardDescription className="text-muted-foreground">API requests per day</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              requests: {
                label: "Requests",
                color: "hsl(var(--primary))",
              },
            }}
            className="h-[350px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="requests" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
