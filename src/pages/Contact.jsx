export default function Contact() {
	return (
		<section className="max-w-3xl">
			<h1>Contact</h1>

			<p>If you'd like to reach out, send a message or email me directly.</p>

			<form
				action="https://formspree.io/f/your-form-id"
				method="POST"
				className="mt-6 grid gap-3"
			>
				<label>
					<span className="block text-sm">Name</span>
					<input name="name" className="w-full border rounded px-3 py-2 mt-1" />
				</label>

				<label>
					<span className="block text-sm">Email</span>
					<input name="email" type="email" className="w-full border rounded px-3 py-2 mt-1" />
				</label>

				<label>
					<span className="block text-sm">Message</span>
					<textarea name="message" rows="6" className="w-full border rounded px-3 py-2 mt-1" />
				</label>

				<div className="flex gap-3">
					<button type="submit" className="bg-[#646cff] text-white px-4 py-2 rounded-md">
						Send
					</button>

					<a className="underline px-4 py-2" href="mailto:you@example.com">
						Or email me
					</a>
				</div>
			</form>

			<p className="mt-6 text-sm opacity-80">Note: replace the Formspree action URL with your own form endpoint or use mailto if preferred.</p>
		</section>
	)
}
