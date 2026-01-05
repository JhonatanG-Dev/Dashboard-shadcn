import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const transactions = [
  {
    id: "TX001",
    customer: "John Doe",
    email: "john@example.com",
    amount: "$250.00",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "TX002",
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: "$450.00",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "TX003",
    customer: "Bob Johnson",
    email: "bob@example.com",
    amount: "$150.00",
    status: "pending",
    date: "2024-01-14",
  },
  {
    id: "TX004",
    customer: "Alice Williams",
    email: "alice@example.com",
    amount: "$350.00",
    status: "completed",
    date: "2024-01-14",
  },
  {
    id: "TX005",
    customer: "Charlie Brown",
    email: "charlie@example.com",
    amount: "$200.00",
    status: "failed",
    date: "2024-01-13",
  },
  {
    id: "TX006",
    customer: "Diana Prince",
    email: "diana@example.com",
    amount: "$500.00",
    status: "completed",
    date: "2024-01-13",
  },
]

export function DataTable() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Transactions</CardTitle>
        <CardDescription className="text-muted-foreground">
          You have {transactions.length} transactions this week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Transaction ID</TableHead>
              <TableHead className="text-muted-foreground">Customer</TableHead>
              <TableHead className="text-muted-foreground">Email</TableHead>
              <TableHead className="text-muted-foreground">Amount</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="border-border">
                <TableCell className="font-mono text-sm text-foreground">{transaction.id}</TableCell>
                <TableCell className="font-medium text-foreground">{transaction.customer}</TableCell>
                <TableCell className="text-muted-foreground">{transaction.email}</TableCell>
                <TableCell className="font-semibold text-foreground">{transaction.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.status === "completed"
                        ? "default"
                        : transaction.status === "pending"
                          ? "secondary"
                          : "destructive"
                    }
                    className={
                      transaction.status === "completed"
                        ? "bg-accent/20 text-accent hover:bg-accent/30"
                        : transaction.status === "pending"
                          ? "bg-primary/20 text-primary hover:bg-primary/30"
                          : ""
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
