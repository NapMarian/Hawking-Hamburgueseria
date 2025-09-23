import { Button } from "@/shared/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border/20 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/hawkins-logo.jpg"
            alt="Hawkins Burger Logo"
            className="w-12 h-12 rounded-full neon-border object-cover"
          />
          <span className="text-3xl font-medium text-primary neon-text script-text">Hawkins</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#menu" className="text-foreground hover:text-primary transition-colors font-medium">
            Menu
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>
        <Button className="bg-primary text-primary-foreground neon-border hover:bg-primary/90 font-bold">
          Order Now
        </Button>
      </div>
    </header>
  )
}