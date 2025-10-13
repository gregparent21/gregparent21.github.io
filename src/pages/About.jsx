export default function About() {
	return (
		<section className="prose max-w-3xl">
			<h1>About</h1>
			<p>
				I'm Gregory — a front-end developer focused on building performant,
				accessible, and maintainable web applications. I enjoy working across
				the stack to ship features end-to-end, with an emphasis on UX and
				developer experience.
			</p>

			<h2>What I build</h2>
			<p>
				Interfaces, dashboards, and small tooling for data-driven apps. I like
				to use modern frameworks (React + Vite), Tailwind for utility-first
				styling, and Node for lightweight backends.
			</p>

			<h2>Skills</h2>
			<ul>
				<li>React, Hooks, and component-driven design</li>
				<li>JavaScript (ES6+), TypeScript (optional)</li>
				<li>Tailwind CSS, responsive design</li>
				<li>Vite, bundlers, and modern CI/CD</li>
				<li>Basic backend with Node/Express or serverless functions</li>
			</ul>

			<h2>Resume</h2>
			<p>
				You can download my resume here: <a className="underline" href="/resume.pdf">Resume (PDF)</a>
			</p>
		</section>
	)
}
