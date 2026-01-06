import { UsersTable } from "@/components/users-table"
import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"
import Link from "next/link"

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-balance tracking-tight lg:text-4xl">Usuarios Registrados</h1>
            <p className="mt-2 text-muted-foreground">Gestiona y visualiza todos los usuarios de tu sistema</p>
          </div>
          <Button size="lg" className="gap-2">
            <UserPlus className="h-5 w-5" />
            <Link href="perfiles/registro-usuarios" className="flex justify-around">
              Registrar Usuario
            </Link>
            
          </Button>
        </div>

        {/* Users Table */}
        <UsersTable />
      </div>
    </div>
  )
}
