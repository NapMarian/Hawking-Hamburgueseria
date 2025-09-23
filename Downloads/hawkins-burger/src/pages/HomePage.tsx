import { Button } from "@/shared/components/ui/button"
import { Card, CardContent } from "@/shared/components/ui/card"
import { Header } from "@/shared/components/layout/Header"
import { Footer } from "@/shared/components/layout/Footer"
import { MenuSection } from "@/features/menu/components/MenuSection"
import { Star, MapPin, Clock, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background retro-pattern">
      <Header />

      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="mb-8">
            <img
              src="/hawkins-logo.jpg"
              alt="Hawkins Burger Character"
              className="w-32 h-32 mx-auto rounded-full neon-border-strong object-cover mb-6"
            />
          </div>
          <h1 className="text-8xl md:text-9xl font-semibold text-primary neon-text-strong mb-4 text-balance script-text neon-pulse">
            Hawkins
          </h1>
          <h2 className="text-5xl md:text-7xl font-black text-secondary neon-text-strong mb-8 text-balance impact-text">
            BURGER
          </h2>
          <p className="text-xl md:text-2xl text-accent neon-text mb-4 font-bold impact-text">
            {"SON PARA CHUPARSE LOS DEDOS"}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 text-pretty">
            {"Serving up the finest burgers in town since 1955"}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground neon-border text-xl px-12 py-8 font-bold">
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent neon-border text-xl px-12 py-8 bg-transparent font-bold hover:bg-accent/10"
            >
              Find Location
            </Button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      </section>

      <MenuSection />

      <section className="py-20 px-4 bg-card/20 relative" id="about">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-primary neon-text-strong mb-12 impact-text">
            {"SINCE 1955"}
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
            <div className="flex-1 max-w-md">
              <img
                src="/hawkins-logo.jpg"
                alt="Hawkins Burger Character"
                className="w-full rounded-lg neon-border object-cover"
              />
            </div>
            <div className="flex-1 max-w-md hero-3d">
              <img
                src="/papas.jpg"
                alt="Hawkins Papas Fritas - Son para chuparse los dedos"
                className="papas-3d w-full"
              />
            </div>
          </div>
          <p className="text-xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto">
            {
              "Hawkins Burger has been serving the community with authentic 50's style burgers and shakes. Our neon-lit diner brings back the golden age of American dining with every bite."
            }
          </p>
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full neon-border mx-auto mb-6 flex items-center justify-center">
                <Star className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-black text-primary neon-text mb-3 impact-text">PREMIUM QUALITY</h3>
              <p className="text-muted-foreground text-lg">{"Fresh ingredients, handcrafted daily"}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full neon-border mx-auto mb-6 flex items-center justify-center">
                <Clock className="w-10 h-10 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-black text-secondary neon-text mb-3 impact-text">FAST SERVICE</h3>
              <p className="text-muted-foreground text-lg">{"Quick service without compromising quality"}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full neon-border mx-auto mb-6 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-black text-accent neon-text mb-3 impact-text">LOCAL FAVORITE</h3>
              <p className="text-muted-foreground text-lg">{"Proudly serving Hawkins for 70 years"}</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/4 left-1/6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" id="contact">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-black text-primary neon-text-strong mb-12 impact-text">
            {"VISIT US TODAY"}
          </h2>
          <Card className="bg-card border-border/20 neon-border">
            <CardContent className="p-10">
              <div className="space-y-8">
                <div className="flex items-center justify-center gap-4">
                  <MapPin className="w-8 h-8 text-primary neon-text" />
                  <span className="text-xl font-bold">{"123 Main Street, Hawkins, IN 47025"}</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Phone className="w-8 h-8 text-secondary neon-text" />
                  <span className="text-xl font-bold">{"(555) 123-BURGER"}</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Clock className="w-8 h-8 text-accent neon-text" />
                  <span className="text-xl font-bold">{"Open Daily 11AM - 10PM"}</span>
                </div>
              </div>
              <Button className="w-full mt-10 bg-primary text-primary-foreground neon-border text-xl py-8 font-black impact-text">
                GET DIRECTIONS
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}