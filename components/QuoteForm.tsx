"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// SETUP INSTRUCTIONS
// 1. Go to https://docs.google.com/forms and create a new form.
// 2. Add these fields (Short answer):
//      Full Name | Company | Phone Number | Email Address | Message
// 3. Click the 3-dot menu → "Get pre-filled link" → fill in dummy values →
//    copy the URL. It looks like:
//    https://docs.google.com/forms/d/e/FORM_ID/viewform?entry.111=Name&entry.222=...
// 4. From that URL, copy:
//    - FORM_ID  (the long string between /e/ and /viewform)
//    - entry IDs for each field (entry.XXXXXXXXX)
// 5. Paste them into the constants below.
// ─────────────────────────────────────────────────────────────────────────────

const GOOGLE_FORM_ID = "1FAIpQLSfAdl-pgOMiKAalw5BJTpFGSB2RguZdpZXVscRPln7Kb2w5vw";
const ENTRY = {
  name:    "entry.2005620554",
  email:   "entry.1045781291",
  company: "entry.1065046570",
  phone:   "entry.1166974658",
  message: "entry.839337160",
};

const FORM_ACTION = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

// ─────────────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

const emptyForm: FormData = {
  name: "", company: "", phone: "", email: "", message: "",
};

type FormState = "idle" | "submitting" | "success";

export default function QuoteForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) e.message = "Please describe your enquiry";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState("submitting");

    // The form submits into the hidden iframe — no page reload, no CORS error.
    // Google Forms receives it and stores in Sheets + sends notification email.
    const nativeForm = e.currentTarget;
    nativeForm.submit();

    // Show success after a short delay (Google Forms doesn't send a JS response)
    setTimeout(() => {
      setFormState("success");
      setFormData(emptyForm);
    }, 1200);
  };

  return (
    <section id="quote" className="py-24 px-4 md:px-8 lg:px-16 bg-surface">
      {/* Hidden iframe — Google Forms response loads here silently */}
      <iframe
        ref={iframeRef}
        name="hidden_iframe"
        id="hidden_iframe"
        className="hidden"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">
            Get a Quote
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 text-lg">
            Tell us about your requirements and our team will respond promptly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm"
        >
          {formState === "success" ? (
            <div className="text-center py-12">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={56} />
              <h3 className="text-2xl font-bold text-primary mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600 mb-8">
                Thank you for reaching out. We will be in touch with you shortly.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            // The form targets the hidden iframe — Google Forms processes it there
            <form
              action={FORM_ACTION}
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name={ENTRY.name}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={`w-full px-4 py-3 border rounded-lg text-sm outline-none transition-colors duration-200 focus:border-primary ${
                      errors.name ? "border-red-400 bg-red-50" : "border-border bg-white"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name={ENTRY.company}
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border border-border rounded-lg text-sm outline-none bg-white focus:border-primary transition-colors duration-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name={ENTRY.phone}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+962 7X XXX XXXX"
                    className="w-full px-4 py-3 border border-border rounded-lg text-sm outline-none bg-white focus:border-primary transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name={ENTRY.email}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3 border rounded-lg text-sm outline-none transition-colors duration-200 focus:border-primary ${
                      errors.email ? "border-red-400 bg-red-50" : "border-border bg-white"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-text-dark mb-2">
                  Message / Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  name={ENTRY.message}
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe the equipment or solutions you need..."
                  className={`w-full px-4 py-3 border rounded-lg text-sm outline-none resize-none transition-colors duration-200 focus:border-primary ${
                    errors.message ? "border-red-400 bg-red-50" : "border-border bg-white"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full bg-primary hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {formState === "submitting" ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Enquiry
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                Powered by Google Forms · Responses stored securely in Google Sheets
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
