import { DashboardHeader } from "@/components/dashboard-header"
import { MetricCards } from "@/components/metric-cards"
import { Charts } from "@/components/charts"
import { DataTable } from "@/components/data-table"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto p-6 space-y-6">
        <MetricCards />
        <Charts />
        <DataTable />
      </main>
    </div>
  )
}
