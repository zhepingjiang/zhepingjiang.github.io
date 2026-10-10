import { profile, stats, featured, projects, experience, education, skills } from './data.js'

const nav = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function Tag({ children }) {
  return (
    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
      {children}
    </span>
  )
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="border-t border-slate-200 py-16 sm:py-20 dark:border-slate-800">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}

function Button({ href, primary, children }) {
  const style = primary
    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
    : 'border border-slate-300 text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500'
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${style}`}
    >
      {children}
    </a>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav className="hidden gap-7 text-sm text-slate-600 sm:flex dark:text-slate-300">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-indigo-600 dark:hover:text-indigo-400">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="py-16 sm:py-24">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{profile.location}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mt-4 text-xl text-slate-700 sm:text-2xl dark:text-slate-200">
        {profile.title} <span className="text-slate-400">·</span> {profile.tagline}
      </p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
        {profile.intro}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={`mailto:${profile.email}`} primary>
          Email me
        </Button>
        <Button href={profile.github}>GitHub</Button>
        {profile.linkedin && <Button href={profile.linkedin}>LinkedIn</Button>}
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-3xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
              {stat.value}
            </dt>
            <dd className="mt-1 text-sm leading-snug text-slate-600 dark:text-slate-400">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function Lanes() {
  return (
    <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        How it works
      </p>
      {featured.lanes.map((lane) => (
        <div key={lane.name} className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="w-28 shrink-0">
            <span className="text-sm font-semibold">{lane.name}</span>
            <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">{lane.note}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {lane.steps.map((step, i) => (
              <span key={step} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-slate-400">→</span>}
                <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium dark:border-slate-700 dark:bg-slate-800">
                  {step}
                </span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function Featured() {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 sm:p-10 dark:border-slate-800">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{featured.name}</h3>
        <span className="text-sm text-slate-500 dark:text-slate-400">{featured.dates}</span>
      </div>
      <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-200">
        {featured.summary}
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {featured.metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/40">
            <dt className="text-xl font-bold text-indigo-700 dark:text-indigo-300">{metric.value}</dt>
            <dd className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">{metric.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8">
        <Lanes />
      </div>

      <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
        {featured.highlights.map((item) => (
          <li key={item.lead} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <span className="font-semibold text-slate-900 dark:text-white">{item.lead}</span> {item.text}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-2">
        {featured.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      {featured.links.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-1">
          {featured.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article
      className={`flex flex-col rounded-2xl border border-slate-200 p-6 dark:border-slate-800 ${
        project.wide ? 'sm:col-span-2' : ''
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
        <span className="text-xs text-slate-500 dark:text-slate-400">{project.dates}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{project.summary}</p>
      {project.detail && (
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.detail}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      {project.links && (
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

function Job({ job }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-8">
      <div className="text-sm text-slate-500 dark:text-slate-400">
        <p>{job.dates}</p>
        <p>{job.location}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold tracking-tight">
          {job.role} <span className="text-slate-400">·</span> {job.company}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{job.team}</p>
        <ul className="mt-4 space-y-3">
          {job.bullets.map((bullet) => (
            <li key={bullet.lead} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">{bullet.lead}</span> {bullet.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="mx-auto max-w-5xl px-5">
        <Hero />

        <Section id="projects" eyebrow="2025 – 2026" title="What I have been building">
          <Featured />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Where I have worked">
          <div className="space-y-12">
            {experience.map((job) => (
              <Job key={job.role + job.company} job={job} />
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills and education" title="What I work with">
          <dl className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.group}>
                <dt className="text-sm font-semibold">{skill.group}</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <h3 className="text-lg font-semibold tracking-tight">{education.school}</h3>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
              {education.degree}, {education.year}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{education.notes}</p>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Get in touch">
          <p className="max-w-2xl text-slate-600 dark:text-slate-300">
            I am looking for software engineering roles in backend and full-stack development. The fastest way
            to reach me is email.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`} primary>
              {profile.email}
            </Button>
            <Button href={profile.github}>GitHub</Button>
            {profile.linkedin && <Button href={profile.linkedin}>LinkedIn</Button>}
          </div>
        </Section>
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}
