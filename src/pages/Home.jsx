import { Link } from "react-router-dom"
import { projects } from "../data/projects"

export default function Home() {
	const featured = projects.slice(0, 3)

	return (
		<section>
			<header className="py-12">
				<div className="max-w-3xl">
					<p className="text-sm text-muted-foreground mb-2">Hello, my name is</p>
					<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
						Gregory Parent
					</h1>
					<p className="mt-4 text-lg opacity-90">
						I build web applications and interactive front-ends. I enjoy
						building clear, accessible user experiences and shipping
						production-ready code.
					</p>

					<div className="mt-6 flex flex-wrap gap-3">
						<Link
							to="/projects"
							className="inline-block bg-[#646cff] text-white px-4 py-2 rounded-md"
						>
							View projects
						</Link>

						<Link
							to="/contact"
							className="inline-block border px-4 py-2 rounded-md"
						>
							Contact
						</Link>

						<a
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block underline px-4 py-2 rounded-md"
						>
							Resume
						</a>
					</div>
				</div>
			</header>

			<section className="mt-10">
				<h2 className="text-2xl font-semibold mb-4">Featured projects</h2>
				<div className="grid gap-4 md:grid-cols-2">
					{featured.map((p) => (
						<article
							key={p.title}
							className="rounded-2xl border p-4 shadow-sm bg-white/3"
						>
							<h3 className="text-lg font-semibold">{p.title}</h3>
							<p className="my-2 text-sm text-muted-foreground">{p.desc}</p>
							<p className="text-sm opacity-80">{p.tech.join(" · ")}</p>
							<div className="mt-3 flex gap-3">
								{p.repo && (
									<a className="underline" href={p.repo} target="_blank" rel="noopener noreferrer">
										Repo
									</a>
								)}
								{p.live && (
									<a className="underline" href={p.live} target="_blank" rel="noopener noreferrer">
										Live
									</a>
								)}
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="mt-12">
				<h2 className="text-2xl font-semibold mb-4">Skills</h2>
				<ul className="flex flex-wrap gap-2 text-sm">
					<li className="px-3 py-1 border rounded">React</li>
					<li className="px-3 py-1 border rounded">JavaScript</li>
					<li className="px-3 py-1 border rounded">Tailwind CSS</li>
					<li className="px-3 py-1 border rounded">Vite</li>
					<li className="px-3 py-1 border rounded">Node</li>
				</ul>
			</section>
		</section>
	)
}
