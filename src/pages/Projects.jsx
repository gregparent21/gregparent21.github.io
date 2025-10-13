import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <article key={p.title} className="rounded-2xl border p-4 shadow-sm">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="my-2">{p.desc}</p>
          <p className="text-sm">{p.tech.join(" · ")}</p>
          <div className="mt-3 flex gap-3">
            {p.repo && <a className="underline" href={p.repo}>Repo</a>}
            {p.live && <a className="underline" href={p.live}>Live</a>}
          </div>
        </article>
      ))}
    </section>
  )
}
