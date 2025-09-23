import { Card, CardContent } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import { Button } from "@/shared/components/ui/button"
import { useEffect, useState } from "react"
import { supabase } from "@/shared/lib/supabase"

interface MenuItem {
  id: string
  name: string
  price: number
  description: string
  image_url: string | null
  category: string
  available: boolean
}

const getAccentColor = (index: number): "primary" | "secondary" | "accent" => {
  const colors = ["primary", "secondary", "accent"] as const
  return colors[index % colors.length]
}

export function MenuSection() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .eq('available', true)
        .eq('category', 'Burgers')  // Only show burgers for now
        .order('name')

      if (error) throw error
      setMenuItems(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Error fetching menu items:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 px-4" id="menu">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-center text-primary neon-text-strong mb-16 impact-text">
            {"OUR FAMOUS BURGERS"}
          </h2>
          <div className="text-xl text-muted-foreground">Loading delicious burgers... 🍔</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 px-4" id="menu">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-center text-primary neon-text-strong mb-16 impact-text">
            {"OUR FAMOUS BURGERS"}
          </h2>
          <div className="text-xl text-red-500">Error loading menu: {error}</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4" id="menu">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center text-primary neon-text-strong mb-16 impact-text">
          {"OUR FAMOUS BURGERS"}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((burger, index) => {
            const accent = getAccentColor(index)
            return (
              <Card
                key={burger.id}
                className="bg-card border-border/20 neon-border hover:border-primary/50 transition-all duration-300 overflow-hidden group flex flex-col"
              >
                <div className="flex-1 bg-muted overflow-hidden relative min-h-[300px] p-2">
                  <img
                    src={burger.image_url || "/placeholder.svg"}
                    alt={burger.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-sm"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-background/90 via-transparent to-transparent rounded-sm"></div>
                </div>
                <CardContent className="p-6 flex-shrink-0">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-2xl font-black text-${accent} neon-text impact-text`}>{burger.name}</h3>
                    <Badge
                      className={`bg-${accent} text-${accent}-foreground neon-text text-lg px-4 py-2 font-bold ml-2`}
                    >
                      ${burger.price.toFixed(2)}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-base mb-4 leading-relaxed">{burger.description}</p>
                  <Button
                    className={`w-full bg-${accent} text-${accent}-foreground neon-border text-lg py-3 font-bold hover:scale-105 transition-transform`}
                  >
                    Add to Order
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}