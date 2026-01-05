import { Bell, Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Overview
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Analytics
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Reports
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="bg-transparent border-0 p-0 h-auto focus-visible:ring-0 text-sm w-64"
            />
          </div>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bell className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
