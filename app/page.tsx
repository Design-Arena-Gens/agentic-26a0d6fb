const timeline = [
  {
    period: "c. 270",
    title: "Birth in Patara",
    description:
      "Nicholas enters a Roman world marked by inequity and persecution, yet is formed by a family rooted in the mercy of Christ.",
  },
  {
    period: "Early 300s",
    title: "Ordained for Service",
    description:
      "Fuelled by the Gospel, Nicholas becomes bishop of Myra and pours his inheritance into rescuing the poor, oppressed, and unjustly imprisoned.",
  },
  {
    period: "325",
    title: "Council of Nicaea",
    description:
      "Nicholas defends the creed of the church, embodying a holiness that stands bravely for orthodoxy without abandoning compassion.",
  },
  {
    period: "4th Century",
    title: "A Living Icon",
    description:
      "Stories of anonymous generosity, daring rescues, and Spirit-led courage spread across continents, making Nicholas a beacon of Christ-like charity.",
  },
  {
    period: "Today",
    title: "From Saint to Santa?",
    description:
      "Popular culture remembers the gifts but forgets the Giver. This book recovers the true Nicholas—the saint who loved Christ in word and deed.",
  },
];

const virtues = [
  {
    name: "Compassionate Almsgiver",
    detail:
      "Nicholas quietly redeemed families from bondage with secret gifts left under cover of night, proving mercy can rewrite futures.",
  },
  {
    name: "Defender of the Oppressed",
    detail:
      "He stormed courtrooms to free innocent sailors, intercepting injustice with a holy boldness that made governors tremble.",
  },
  {
    name: "Guardian of Orthodoxy",
    detail:
      "Nicholas proclaimed Christ’s divinity at Nicaea, reminding the church that right belief fuels right living.",
  },
];

const chapters = [
  {
    heading: "Beyond Good Cheer",
    summary:
      "The opening chapters confront the myth of Santa Claus and reveal the spiritual fire that animated the bishop of Myra.",
  },
  {
    heading: "Stories That Convert",
    summary:
      "Eyewitness accounts of miracles, rescues, and secret philanthropy showcase a saint who became an icon of the Gospel.",
  },
  {
    heading: "Reclaiming the Gift",
    summary:
      "Practical reflections invite families to celebrate Christmas by embodying Nicholas’ rhythm of prayer, justice, and lavish generosity.",
  },
];

const pledges = [
  "Practice hidden generosity in your neighborhood.",
  "Advocate for those whose voices are silenced.",
  "Let prayer lead every gift you give.",
  "Teach the next generation the story behind the saint.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),rgba(236,223,200,0.4)_45%,rgba(214,182,141,0.35)_70%,rgba(187,146,97,0.25)_100%)]" />
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-12 lg:px-20">
        <header className="rounded-3xl bg-white/80 p-8 shadow-[0_30px_80px_rgba(150,120,80,0.12)] backdrop-blur-md sm:p-12">
          <div className="flex flex-col gap-6 text-balance sm:gap-8">
            <span className="w-fit rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-amber-800">
              The Authentic Nicholas
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight lg:text-6xl">
              Meet the saint who turned generosity into a revolution of holy
              compassion.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-700 sm:text-xl">
              Across empires and generations, Saint Nicholas captured the hearts
              of the faithful—not as a mythic giver of toys, but as a fierce
              defender of the poor and a mirror of Christ. This book invites
              every reader to rediscover the man behind the legend and to follow
              his path of sacrificial love.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#chapters"
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-amber-700/30 transition hover:bg-amber-700"
              >
                Peek Inside the Book
              </a>
              <a
                href="#pledge"
                className="inline-flex items-center justify-center rounded-full border border-amber-700/30 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-amber-800 transition hover:border-amber-800 hover:text-amber-900"
              >
                Live the Legacy
              </a>
            </div>
          </div>
        </header>

        <section className="grid gap-12 lg:grid-cols-[1.8fr_1fr]">
          <article className="rounded-3xl bg-white/90 p-8 shadow-[0_24px_60px_rgba(150,120,80,0.12)] backdrop-blur sm:p-10">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              The saint who stood with the forgotten.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Nicholas of Myra refused to separate doctrine from mercy. The poor,
              the falsely accused, the hungry, and the hopeless found in him an
              advocate whose generosity matched his orthodoxy. While modern
              folklore recasts him as a jolly patron of gifts, history remembers
              a courageous bishop who embodied the Gospel in every act of
              justice.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Stories of coins tossed through windows, sailors rescued from
              deadly storms, and corrupt rulers confronted in public courts made
              Nicholas legendary. Yet behind every tale is a simple conviction:
              the love of Jesus must be tangible, timely, and tender.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {virtues.map((virtue) => (
                <div
                  key={virtue.name}
                  className="rounded-2xl border border-amber-900/10 bg-amber-50/60 p-5"
                >
                  <h3 className="text-base font-semibold uppercase tracking-wide text-amber-900">
                    {virtue.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-amber-900/80">
                    {virtue.detail}
                  </p>
                </div>
              ))}
            </div>
          </article>
          <aside className="flex flex-col justify-between gap-8 rounded-3xl bg-gradient-to-b from-amber-700 via-amber-600 to-amber-500 p-8 text-amber-50 shadow-[0_24px_70px_rgba(150,90,20,0.3)] sm:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-100/80">
                Iconic Witness
              </p>
              <h3 className="mt-3 text-3xl font-semibold leading-snug text-white">
                “Nicholas did not simply give gifts—he gave people back their
                dignity.”
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-amber-50/80">
              Each chapter pairs the beloved legends with the historical
              records, revealing a bishop whose life became a living icon of the
              Incarnation. Readers are invited to see Christmas through his
              eyes: as an invitation to find Christ among the vulnerable.
            </p>
          </aside>
        </section>

        <section className="rounded-3xl bg-white/90 p-8 shadow-[0_24px_60px_rgba(150,120,80,0.12)] backdrop-blur sm:p-12">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Footsteps through history
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">
            From the harbors of Myra to the snowy folklore of northern Europe,
            Nicholas’ story has been retold in a thousand languages. Trace the
            journey that transformed a Mediterranean bishop into a global symbol
            of Christian charity.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((entry) => (
              <div
                key={entry.period}
                className="flex h-full flex-col rounded-2xl border border-amber-900/10 bg-amber-50/60 p-6 shadow-[0_20px_40px_rgba(150,120,80,0.08)]"
              >
                <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                  {entry.period}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-amber-900">
                  {entry.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-amber-900/80">
                  {entry.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="chapters"
          className="grid gap-10 rounded-3xl bg-gradient-to-br from-white via-amber-50/70 to-amber-100/70 p-8 shadow-[0_30px_70px_rgba(150,120,80,0.14)] sm:grid-cols-[1.2fr_1fr] sm:p-12"
        >
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Inside the book
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-slate-700">
              Each chapter reintroduces Saint Nicholas as a pastor, intercessor,
              and icon of Christ. The narrative invites families to exchange
              folklore for formation and to celebrate Christmas by entering the
              story of radical mercy.
            </p>
            <div className="mt-8 space-y-6">
              {chapters.map((chapter) => (
                <div
                  key={chapter.heading}
                  className="rounded-2xl border border-amber-800/10 bg-white/80 p-6"
                >
                  <h3 className="text-lg font-semibold text-amber-900">
                    {chapter.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-amber-900/80">
                    {chapter.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <aside className="flex flex-col justify-between gap-8 rounded-2xl border border-dashed border-amber-700/40 bg-amber-100/60 p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-800/80">
                Featured Excerpt
              </p>
              <blockquote className="mt-4 border-l-4 border-amber-700/50 pl-6 text-lg leading-relaxed text-amber-900">
                “Children learn the love of Christ not through stories of toys,
                but through tales of the saint who poured out his life for the
                hungry, the overlooked, and the castaway.”
              </blockquote>
            </div>
            <div className="rounded-xl bg-white/70 p-6 text-sm text-amber-900/80 shadow-inner">
              <p className="font-semibold uppercase tracking-[0.25em] text-amber-800">
                Reader Invite
              </p>
              <p className="mt-3 leading-relaxed">
                Share these stories around the Advent wreath, let prayer follow
                every page, and consider what hidden gift Christ is calling your
                family to give this year.
              </p>
            </div>
          </aside>
        </section>

        <section
          id="pledge"
          className="rounded-3xl bg-white/90 p-8 shadow-[0_24px_60px_rgba(150,120,80,0.12)] backdrop-blur sm:p-12"
        >
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Carry Nicholas’ torch into your world
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">
            Nicholas’ generosity was not seasonal. It was a rule of life rooted
            in prayer, humility, and courage. Choose a pledge below and let this
            book be the spark that ignites your family’s witness.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pledges.map((pledge) => (
              <label
                key={pledge}
                className="group flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-amber-900/10 bg-amber-50/60 p-6 transition hover:-translate-y-1 hover:border-amber-700/30 hover:shadow-[0_18px_40px_rgba(165,110,40,0.18)]"
              >
                <div>
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-amber-700/40 text-amber-700 focus:ring-amber-700"
                  />
                  <p className="mt-4 text-sm font-medium leading-relaxed text-amber-900">
                    {pledge}
                  </p>
                </div>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700/70">
                  Make it real
                </span>
              </label>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 p-[1px]">
          <div className="flex flex-col gap-6 rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white/95 p-8 text-center shadow-[0_24px_60px_rgba(150,120,80,0.22)] sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <h2 className="text-xl font-semibold text-amber-900 sm:text-2xl">
                Ready to meet the Nicholas who changed the world?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-amber-900/80">
                Let this book be a doorway into practicing mercy with the same
                burning love that turned a bishop into the world’s most beloved
                saint.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-amber-700 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-amber-800/30 transition hover:bg-amber-800"
            >
              Order the Book
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
