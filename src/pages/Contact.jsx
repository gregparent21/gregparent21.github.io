import { useState } from "react"

const FORM_ENDPOINT = "https://formspree.io/f/xgvndkwp"

export default function Contact() {
	const [form, setForm] = useState({ name: "", email: "", message: "", _gotcha: "" })
	const [status, setStatus] = useState({ submitting: false, done: false, error: "" })

	const handleChange = (e) => {
		const { name, value } = e.target
		setForm((s) => ({ ...s, [name]: value }))
	}

	const validate = () => {
		if (!form.name.trim()) return "Please enter your name."
		if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email."
		if (!form.message.trim()) return "Please enter a message."
		return null
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setStatus({ submitting: true, done: false, error: "" })

		// honeypot check
		if (form._gotcha) {
			setStatus({ submitting: false, done: false, error: "Spam detected." })
			return
		}

		const err = validate()
		if (err) {
			setStatus({ submitting: false, done: false, error: err })
			return
		}

		try {
			const res = await fetch(FORM_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
			})

			if (res.ok) {
				setForm({ name: "", email: "", message: "", _gotcha: "" })
				setStatus({ submitting: false, done: true, error: "" })
			} else {
				const body = await res.json().catch(() => ({}))
				setStatus({ submitting: false, done: false, error: body.error || "Submission failed." })
			}
		} catch (err) {
			setStatus({ submitting: false, done: false, error: err.message || "Network error" })
		}
	}

	return (
		<section className="max-w-3xl">
			<h1 className="text-4xl font-semibold mb-2">Contact</h1>

			<p>If you'd like to reach out, send a message or email me directly!</p>

			<form onSubmit={handleSubmit} className="mt-6 grid gap-3">
				{/* honeypot field to deter bots */}
				<input type="text" name="_gotcha" value={form._gotcha} onChange={handleChange} autoComplete="off" className="hidden" />

				<label>
					<span className="block text-sm">Name</span>
					<input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />
				</label>

				<label>
					<span className="block text-sm">Email</span>
					<input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />
				</label>

				<label>
					<span className="block text-sm">Message</span>
					<textarea name="message" rows={6} value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />
				</label>

				{status.error && <div className="text-red-600">{status.error}</div>}
				{status.done && <div className="text-green-600">Thanks — your message has been sent!</div>}

				<div className="flex items-center gap-3">
					<button type="submit" disabled={status.submitting} className="bg-[#646cff] text-white px-4 py-2 rounded-md">
						{status.submitting ? "Sending…" : "Send"}
					</button>

					<a className="underline px-4 py-2" href="mailto:gmp89@cornell.edu">
						Or email me
					</a>

					<a href="https://www.linkedin.com/in/gregory-parent" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
						<img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
						<span className="text-sm underline">LinkedIn</span>
					</a>
				</div>
			</form>
		</section>
	)
}
