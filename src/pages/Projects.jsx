import { projects } from "../data/projects"
import { useState, useMemo } from "react"

function Timeline({ list, selectedIndex, onSelect }) {
  return (
    <div className="relative">
      {/* vertical bar */}
      <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-gray-300" />

      <div className="space-y-6 sticky top-6">
        {list.map((p, i) => (
          <button
            key={p.title}
            onClick={() => onSelect(i)}
            className={`w-full text-left relative pl-10 py-2 rounded-md transition-colors hover:bg-gray-100 focus:outline-none ${i === selectedIndex ? "bg-gray-100" : ""}`}
          >
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <div className={`h-4 w-4 rounded-full border-2 ${i === selectedIndex ? "bg-[#646cff] border-white" : "bg-white border-gray-300"}`} />
            </div>
            <div>
              <div className="text-sm font-semibold">{p.title}</div>
              <div className="text-xs opacity-70">{p.date}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  // newest first
  const list = useMemo(() => [...projects].sort((a, b) => {
    if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime()
    return 0
  }), [])

  const [selected, setSelected] = useState(0)
  const project = list[selected] || list[0]

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>

      <div className="md:grid md:grid-cols-3 md:gap-8">
        {/* Left: timeline (1/3) */}
        <aside className="md:col-span-1">
          <Timeline list={list} selectedIndex={selected} onSelect={setSelected} />
        </aside>

        {/* Right: details (2/3) */}
        <div className="md:col-span-2 mt-6 md:mt-0">
          <article className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg mb-4">{project.desc}</p>
            <div className="mb-4 text-sm opacity-80">{project.tech.join(" · ")}</div>
            {project.repo && (
              <div className="mb-2">
                <a className="underline" href={project.repo} target="_blank" rel="noopener noreferrer">Repository</a>
              </div>
            )}
            {project.live && (
              <div className="mb-4">
                <a className="underline" href={project.live} target="_blank" rel="noopener noreferrer">Live demo</a>
              </div>
            )}

            <section>
              <h3 className="text-xl font-semibold mb-2">About this project</h3>
              <p className="mb-4">{project.longDesc ?? "Add a longer description for this project in src/data/projects.js using the `longDesc` field."}</p>
            </section>
          </article>
        </div>
      </div>
    </section>
  )
}
