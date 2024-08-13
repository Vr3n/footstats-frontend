import TournamentCard from "@/components/TournamentCard";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const tournaments = [
  {
    name: "Premier League",
    slug: "premier-league",
    description: "Country: England",
    image: "https://assets.turbologo.com/blog/en/2020/01/19084653/Premier-League-symbol.png"
  },
  {
    name: "La Liga Hypermotion",
    slug: "la-liga-hypermotion",
    description: "Country: Spain",
    image: "https://www.portalcadista.com/fotonoticias/2022-2023/diciembre/laligahyper_calendario.jpg"
  },
  {
    name: "Bundesliga",
    slug: "bundesliga",
    description: "Country: Germany",
    image: "https://logowik.com/content/uploads/blog/bundesliga-football-clubs-and-logos3600.logowik.com.webp"
  },
]

export default function Home() {
  return (
    <main>
      <h2 className="text-lg font-semibold">Tournaments</h2>
      <h3 className="text-sm text-muted-foreground">Ongoing tournaments around the world.</h3>
      <Separator className="mt-2 mb-4" />
      <section id="tournaments" className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {tournaments.map((tournament, idx) => (
          <Link href={`/tournament/${tournament.slug}`}>
            <TournamentCard
              key={idx}
              tournamentName={tournament.name}
              tournamentDescription={tournament.description}
              imageSrc={tournament.image}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
