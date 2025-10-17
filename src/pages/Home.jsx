import { Link } from "react-router-dom"
import { projects } from "../data/projects"

export default function Home() {
	// show exactly two featured projects in this specific order
	const _featuredOrder = ["KTP Website", "Portfolio Optimizer"]
	const featured = _featuredOrder.map((title) => projects.find((p) => p.title === title)).filter(Boolean)

	return (
		<section>
			<header className="py-12">
				<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

					{/* Intro text */}
					<div className="max-w-3xl">
						<p className="text-sm text-muted-foreground mb-2">Hello, my name is</p>
						<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
							Gregory Parent
						</h1>
						<p className="mt-4 text-lg opacity-90">
							I'm a sophomore at Cornell University majoring in Computer Science
							with a minor in Operations Research. I have a passion for all things
							technology and software engineering.
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
						</div>
					</div>

					<img
						src="/images/greg_parent_headshot_3:23.jpeg"
						alt="Gregory Parent headshot"
						className="w-44 h-60 rounded-full object-cover shadow-md"
					/>
				</div>
			</header>
			{/* Skills */}
			<section className="mt-2">
				<h2 className="text-3xl font-semibold mb-4">Skills</h2>

				{/* Languages */}
				<div className="mb-4">
					<p className="font-semibold mb-2">Languages:</p>
					<ul className="flex flex-wrap gap-2 text-sm">
						<li className="px-3 py-1 border rounded">Python</li>
						<li className="px-3 py-1 border rounded">Java</li>
						<li className="px-3 py-1 border rounded">SQL</li>
						<li className="px-3 py-1 border rounded">OCaml</li>
						<li className="px-3 py-1 border rounded">JavaScript</li>
						<li className="px-3 py-1 border rounded">HTML/CSS</li>
					</ul>
				</div>

				{/* Frameworks */}
				<div className="mb-4">
					<p className="font-semibold mb-2">Frameworks:</p>
					<ul className="flex flex-wrap gap-2 text-sm">
						<li className="px-3 py-1 border rounded">Flask</li>
						<li className="px-3 py-1 border rounded">React</li>
						<li className="px-3 py-1 border rounded">PostgreSQL</li>
						<li className="px-3 py-1 border rounded">MongoDB</li>
						<li className="px-3 py-1 border rounded">NumPy</li>
						<li className="px-3 py-1 border rounded">Pandas</li>
						<li className="px-3 py-1 border rounded">BeautifulSoup</li>
					</ul>
				</div>

				{/* Tools */}
				<div>
					<p className="font-semibold mb-2">Tools:</p>
					<ul className="flex flex-wrap gap-2 text-sm">
						<li className="px-3 py-1 border rounded">Git / GitHub</li>
						<li className="px-3 py-1 border rounded">Postman</li>
						<li className="px-3 py-1 border rounded">REST APIs</li>
						<li className="px-3 py-1 border rounded">VS Code</li>
					</ul>
				</div>
			</section>


			{/* Featured projects */}
			<section className="mt-10">
				<h2 className="text-3xl font-semibold mb-4">Featured projects</h2>
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


		</section>
	)
}
