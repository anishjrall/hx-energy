"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE, SERVICE_OPTIONS, BUDGET_OPTIONS } from "@/lib/constants";
import type { ContactFormValues } from "@/types";

type SubmitState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();
  const [state, setState] = useState<SubmitState>("idle");

  const onSubmit = async (data: ContactFormValues) => {
    setState("loading");
    try {
      // Replace with the client's actual form endpoint / API route.
      await new Promise((resolve, reject) =>
        setTimeout(() => (data.email ? resolve(true) : reject()), 1200)
      );
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  };

  // Sharp, industrial form input classes
  const inputClasses =
    "w-full rounded-none border border-gray-300 bg-white px-4 py-3.5 text-[15px] text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]";
  const labelClasses = "mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700";
  const errorClasses = "mt-1.5 text-xs font-medium text-red-600";

  return (
    <section id="contact" className="bg-white py-24">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        
        {/* Left Column: Info & Details */}
        <div>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's engineer your solution"
            description="Reach out to the relevant team, or use the form for a detailed technical and commercial proposal within 48 hours."
          />

          <div className="mt-14 space-y-8">
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="group flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-gray-100 text-gray-400 transition-colors duration-300 group-hover:bg-[#FF6B00] group-hover:text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div className="pt-1">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone</p>
                <p className="mt-1 text-[15px] font-bold text-gray-900">{SITE.phone}</p>
              </div>
            </a>
            
            <a href={`mailto:${SITE.email}`} className="group flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-gray-100 text-gray-400 transition-colors duration-300 group-hover:bg-[#FF6B00] group-hover:text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div className="pt-1">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</p>
                <p className="mt-1 text-[15px] font-bold text-gray-900">{SITE.email}</p>
              </div>
            </a>
            
            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-gray-100 text-[#FF6B00]">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="pt-1">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Registered Office</p>
                <p className="mt-1 max-w-xs text-[15px] leading-relaxed font-medium text-gray-900">{SITE.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          // Sharp, heavy form container
          className="bg-[#F8F9FA] border border-gray-200 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClasses}>Full name</label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                aria-invalid={!!errors.name}
                className={inputClasses}
                placeholder="Your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
            </div>
            
            <div>
              <label htmlFor="company" className={labelClasses}>Company</label>
              <input
                id="company"
                type="text"
                autoComplete="organization"
                className={inputClasses}
                placeholder="Company name"
                {...register("company", { required: "Company is required" })}
              />
              {errors.company && <p className={errorClasses}>{errors.company.message}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className={labelClasses}>Phone</label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                className={inputClasses}
                placeholder="+91 00000 00000"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className={labelClasses}>Email</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={inputClasses}
                placeholder="you@company.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                })}
              />
              {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
            </div>
            
            <div>
              <label htmlFor="service" className={labelClasses}>Service required</label>
              <select
                id="service"
                defaultValue=""
                className={inputClasses}
                {...register("service", { required: "Please select a service" })}
              >
                <option value="" disabled>Select a service</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.service && <p className={errorClasses}>{errors.service.message}</p>}
            </div>
            
            <div>
              <label htmlFor="budget" className={labelClasses}>Estimated budget</label>
              <select id="budget" defaultValue="" className={inputClasses} {...register("budget")}>
                <option value="" disabled>Select a range</option>
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="details" className={labelClasses}>Project details</label>
              <textarea
                id="details"
                rows={4}
                className={inputClasses}
                placeholder="Tell us about your site, capacity requirements and timeline"
                {...register("details", { required: "Please add a short project description" })}
              />
              {errors.details && <p className={errorClasses}>{errors.details.message}</p>}
            </div>
          </div>

          <button
            type="submit"
            disabled={state === "loading"}
            // Professional industrial button matching Button.tsx
            className="mt-8 flex w-full items-center justify-center gap-3 bg-[#FF6B00] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#E56000] disabled:opacity-70 sm:w-auto"
          >
            {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            {state === "loading" ? "SENDING..." : "SUBMIT ENQUIRY"}
          </button>

          {state === "success" && (
            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-green-700">
              <CheckCircle2 className="h-5 w-5" /> Thanks &mdash; your enquiry has been received. We&rsquo;ll respond within 24 hours.
            </p>
          )}
          {state === "error" && (
            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-red-600">
              <AlertCircle className="h-5 w-5" /> Something went wrong. Please try again or email {SITE.email}.
            </p>
          )}
        </motion.form>
      </Container>
    </section>
  );
}