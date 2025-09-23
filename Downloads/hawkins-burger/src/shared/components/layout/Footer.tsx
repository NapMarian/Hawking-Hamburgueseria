export function Footer() {
  return (
    <footer className="border-t border-border/20 py-12 px-4 bg-card/30">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src="/hawkins-logo.jpg"
            alt="Hawkins Burger Logo"
            className="w-8 h-8 rounded-full neon-border object-cover"
          />
          <span className="text-3xl font-medium text-primary neon-text script-text">Hawkins Burger</span>
        </div>
        <p className="text-muted-foreground text-lg">
          {"© 2024 Hawkins Burger. All rights reserved. Serving happiness since 1955."}
        </p>
      </div>
    </footer>
  )
}