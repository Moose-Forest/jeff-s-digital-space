import farmFrenzyScreenshot from "@/assets/farm-frenzy-screenshot.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header / Identity */}
      <header className="max-w-[720px] mx-auto px-6 pt-24 pb-8">
        <h1 className="font-heading text-5xl md:text-6xl font-medium tracking-tight text-foreground leading-tight">
          Jeff Mortimer
        </h1>
        <p className="font-body text-lg text-muted-foreground mt-3">
          EMBA · Ann Arbor, Michigan
        </p>
      </header>

      {/* About */}
      <section className="max-w-[720px] mx-auto px-6 pt-[140px]">
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-8">
          About
        </h2>
        <p className="font-body text-base leading-relaxed text-foreground max-w-prose">
          Product Strategy Leader, Author, Speaker, and Podcast Co-Host. Known as #theAgileMoose — a seasoned product and agile leader with over 15 years of experience driving transformation at scale. Passionate about building high-performing teams and delivering meaningful outcomes through disciplined strategy and human-centered leadership.
        </p>
      </section>

      {/* Experience */}
      <section className="max-w-[720px] mx-auto px-6 pt-[140px]">
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-12">
          Experience
        </h2>

        <div className="space-y-16">
          <div>
            <h3 className="font-heading text-2xl font-medium text-foreground">
              Slalom
            </h3>
            <p className="font-body italic text-base text-foreground mt-1">
              Senior Consultant — Product Strategy &amp; Transformation Lead
            </p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Oct 2021 — Present
            </p>
            <p className="font-body text-base leading-relaxed text-foreground mt-4 max-w-prose">
              Leading product strategy and agile transformation engagements for enterprise clients. Driving organizational change through coaching, frameworks, and hands-on delivery leadership across cross-functional teams.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Projects — Full-bleed cinematic break */}
      <section className="pt-[140px]">
        <div className="max-w-[720px] mx-auto px-6 mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
            Recent Projects
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <img
            src={farmFrenzyScreenshot}
            alt="Farm Frenzy — a farming strategy board game with AI opponents"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70 flex flex-col items-center justify-center">
            <h3 className="font-heading text-4xl md:text-5xl font-medium text-background mb-4">
              Farm Frenzy
            </h3>
            <p className="font-body text-base text-background/70 mb-6 text-center px-6 max-w-md">
              A strategy board game with AI opponents of varying difficulty. Built as a web application with real-time gameplay.
            </p>
            <a
              href="https://farm-frenzy-wiue.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-base font-medium text-primary-foreground bg-primary px-6 py-3 hover:opacity-80 transition-opacity"
            >
              View Live
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-[720px] mx-auto px-6 pt-[140px] pb-24">
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-8">
          Connect
        </h2>
        <div className="space-y-3">
          <a
            href="https://www.linkedin.com/in/jeff-mortimer-emba-1286b828/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-base text-primary hover:opacity-70 transition-opacity block"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
