"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GOOGLE_FORM_ID = "1FAIpQLSfAdl-pgOMiKAalw5BJTpFGSB2RguZdpZXVscRPln7Kb2w5vw";
const ENTRY = {
  name:    "entry.2005620554",
  email:   "entry.1045781291",
  company: "entry.1065046570",
  phone:   "entry.1166974658",
  message: "entry.839337160",
};
const FORM_ACTION = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

interface FormData {
  name: string; company: string; phone: string; email: string; message: string;
}
const emptyForm: FormData = { name: "", company: "", phone: "", email: "", message: "" };
type FormState = "idle" | "submitting" | "success";

export default function QuoteForm() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!formData.name.trim()) e.name = t.quote.nameError;
    if (!formData.email.trim()) {
      e.email = t.quote.emailError;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = t.quote.emailInvalid;
    }
    if (!formData.message.trim()) e.message = t.quote.messageError;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.dataset.field as keyof FormData;
    const { value } = e.target;
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState("submitting");
    (e.currentTarget as HTMLFormElement).submit();
    setTimeout(() => { setFormState("success"); setFormData(emptyForm); }, 1200);
  };

  return (
    <section id="quote" className="py-24 px-4 md:px-8 lg:px-16 bg-surface">
      <iframe name="hidden_iframe" id="hidden_iframe" className="hidden" aria-hidden="true" />

      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">{t.quote.tag}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">{t.quote.title}</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 text-lg">{t.quote.sub}</p>
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
              <h3 className="text-2xl font-bold text-primary mb-2">{t.quote.successTitle}</h3>
              <p className="text-gray-600 mb-8">{t.quote.successDesc}</p>
              <button
                onClick={() => setFormState("idle")}
                className="bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                {t.quote.sendAnother}
              </button>
            </div>
          ) : (
            <form action={FORM_ACTION} method="POST" target="hidden_iframe" onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    {t.quote.name} <span className="text-red-500">{t.quote.required}</span>
                  </label>
                  <input type="text" name={ENTRY.name} data-field="name" value={formData.name} onChange={handleChange}
                    placeholder={t.quote.namePlaceholder}
                    className={`w-full px-4 py-3 border rounded-lg text-sm outline-none transition-colors duration-200 focus:border-primary ${errors.name ? "border-red-400 bg-red-50" : "border-border bg-white"}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">{t.quote.company}</label>
                  <input type="text" name={ENTRY.company} data-field="company" value={formData.company} onChange={handleChange}
                    placeholder={t.quote.companyPlaceholder}
                    className="w-full px-4 py-3 border border-border rounded-lg text-sm outline-none bg-white focus:border-primary transition-colors duration-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">{t.quote.phone}</label>
                  <input type="tel" name={ENTRY.phone} data-field="phone" value={formData.phone} onChange={handleChange}
                    placeholder={t.quote.phonePlaceholder}
                    className="w-full px-4 py-3 border border-border rounded-lg text-sm outline-none bg-white focus:border-primary transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    {t.quote.email} <span className="text-red-500">{t.quote.required}</span>
                  </label>
                  <input type="email" name={ENTRY.email} data-field="email" value={formData.email} onChange={handleChange}
                    placeholder={t.quote.emailPlaceholder}
                    className={`w-full px-4 py-3 border rounded-lg text-sm outline-none transition-colors duration-200 focus:border-primary ${errors.email ? "border-red-400 bg-red-50" : "border-border bg-white"}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-text-dark mb-2">
                  {t.quote.message} <span className="text-red-500">{t.quote.required}</span>
                </label>
                <textarea name={ENTRY.message} data-field="message" value={formData.message} onChange={handleChange}
                  rows={5} placeholder={t.quote.messagePlaceholder}
                  className={`w-full px-4 py-3 border rounded-lg text-sm outline-none resize-none transition-colors duration-200 focus:border-primary ${errors.message ? "border-red-400 bg-red-50" : "border-border bg-white"}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button type="submit" disabled={formState === "submitting"}
                className="w-full bg-primary hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {formState === "submitting" ? (
                  <><Loader2 className="animate-spin" size={18} />{t.quote.submitting}</>
                ) : (
                  <><Send size={18} />{t.quote.submit}</>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">{t.quote.privacy}</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
