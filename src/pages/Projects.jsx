import { projects } from "../data/projects"

function TimelineItem({ project, idx }) {
  const isLeft = idx % 2 === 0
  return (
    <div className="relative md:py-8">
      <div className="md:grid md:grid-cols-3 md:items-start">
        {/* left column */}
        <div className="col-span-1 md:flex md:justify-end md:pr-8">
          {isLeft && (
            <div className="inline-block md:w-[90%]">
              <div className="rounded-2xl border p-6 shadow-sm bg-white/3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="my-3 text-lg">{project.desc}</p>
                <p className="text-sm opacity-80">{project.tech.join(" · ")}</p>
                <p className="text-xs opacity-60 mt-2">{project.date}</p>
                <div className="mt-3 flex gap-3 justify-end">
                  {project.repo && (
                    <a className="underline" href={project.repo} target="_blank" rel="noopener noreferrer">
                      Repo
                    </a>
                  )}
                  {project.live && (
                    <a className="underline" href={project.live} target="_blank" rel="noopener noreferrer">
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* center marker column */}
        <div className="col-span-1 relative flex justify-center">
          <div className="hidden md:block absolute inset-y-0 w-px bg-gray-300" />
          <div className="relative z-10 -translate-y-6">
            <div className="h-5 w-5 rounded-full bg-[#646cff] border-4 border-white" />
          </div>
        </div>

        {/* right column */}
        <div className="col-span-1 md:flex md:justify-start md:pl-8">
          {!isLeft && (
            <div className="inline-block md:w-[90%]">
              <div className="rounded-2xl border p-6 shadow-sm bg-white/3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="my-3 text-lg">{project.desc}</p>
                <p className="text-sm opacity-80">{project.tech.join(" · ")}</p>
                <p className="text-xs opacity-60 mt-2">{project.date}</p>
                <div className="mt-3 flex gap-3 justify-start">
                  {project.repo && (
                    <a className="underline" href={project.repo} target="_blank" rel="noopener noreferrer">
                      Repo
                    </a>
                  )}
                  {project.live && (
                    <a className="underline" href={project.live} target="_blank" rel="noopener noreferrer">
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const list = [...projects].sort((a, b) => {
    if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime()
    return 0
  })

  return (
    <section className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300" />

        <div className="space-y-8">
          {list.map((p, i) => (
            <TimelineItem key={p.title} project={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
