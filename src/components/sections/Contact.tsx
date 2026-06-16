"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Reveal from "@/components/ui/Reveal";

type ContactForm = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  async function onSubmit(data: ContactForm) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#111111] py-32 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(255,102,0,.12)_0%,transparent_65%)]" />

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="label">
            <div className="mb-5 font-mono text-[11px] uppercase tracking-widest text-[#ff6600]">
              Ready to Build
            </div>
          </Reveal>
          <Reveal variant="heading">
            <h2 className="mb-5 text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-white">
              Let&apos;s make your product <span className="text-[#ff6600]">real.</span>
            </h2>
          </Reveal>
          <Reveal variant="text">
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/50">
              Tell us what you&apos;re building. We&apos;ll tell you exactly how we can help — from a
              focused Sprint to full-scope development.
            </p>
          </Reveal>

          <Reveal variant="text" delay={0.08}>
            <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:hello@creovolabs.com" className="btn-primary px-8">
                Start a Project &rarr;
              </a>
              <a
                href="mailto:hello@creovolabs.com"
                className="text-sm text-white/50 transition hover:text-white"
              >
                hello@creovolabs.com
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="text" delay={0.16}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-dark mx-auto max-w-lg space-y-5 p-8"
          >
            {[
              { id: "name", label: "Name", type: "text", rules: { required: "Required" } },
              {
                id: "email",
                label: "Email",
                type: "email",
                rules: {
                  required: "Required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                },
              },
              { id: "company", label: "Company", type: "text", rules: {} },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-white/70">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  {...register(field.id as keyof ContactForm, field.rules)}
                  className="w-full rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20"
                />
                {errors[field.id as keyof ContactForm] && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors[field.id as keyof ContactForm]?.message}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/70">
                Tell us about your product
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message", { required: "Required" })}
                className="w-full resize-none rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm font-medium text-[#ff6600]">
                Message sent — we&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Something went wrong. Email us directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
