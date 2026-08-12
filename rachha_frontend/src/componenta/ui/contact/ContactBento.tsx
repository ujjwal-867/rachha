import { useRef, useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Button from "../button/Button";

// const EMAILJS_SERVICE_ID = "service_2yojg4q";
const EMAILJS_SERVICE_ID = "service_5smhwex";

//rachha346@gmail.com
// const EMAILJS_TEMPLATE_ID = "template_cpf907g";
const EMAILJS_TEMPLATE_ID = "template_1jvhkxh";
// const EMAILJS_PUBLIC_KEY = "Y8FkaihrMzE-Si5A8";
const EMAILJS_PUBLIC_KEY = "LsOIkjRxV0OqDTEUI";

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbwUfpTR0KDSDyiLA5r57W8WT4eyHKjH3szzDXa-J5E8WvWCGhIt8vgCWyA7lAaWOHw0/exec";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface SubmitResult {
  success: boolean;
  message: string;
}

async function submitToEmailJS(data: ContactFormData): Promise<SubmitResult> {
  const result = await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      title: "Contact Form",
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    },
    EMAILJS_PUBLIC_KEY
  );

  if (result.status === 200) {
    return { success: true, message: "Your message has been sent successfully!" };
  }
  throw new Error("Failed to send email");
}

function submitToGoogleSheets(data: ContactFormData): void {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("message", data.message);

  fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  }).catch(() => {});
}

async function submitContactForm(
  data: ContactFormData
): Promise<SubmitResult> {
  try {
    const result = await submitToEmailJS(data);
    submitToGoogleSheets(data);
    return result;
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
    };
  }
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactBento() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const updateField =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const res = await submitContactForm(form);

    if (res.success) {
      setResult({ type: "success", message: res.message });
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setResult({ type: "error", message: res.message });
    }

    setIsSubmitting(false);
  };

  const handleButtonClick = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* ─── Left Bento — Contact Form ─── */}
      <div className="lg:flex-[6] rounded-2xl border border-royalGold/60 bg-gbrown p-8 md:p-10 shadow-lg shadow-royalGold/10">
        <h3 className="gold-title-shine font-serif font-thin tracking-[0.1em] text-3xl md:text-4xl uppercase mb-8">
          Contact Us
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Field label="Name" required>
            <input
              type="text"
              value={form.name}
              onChange={updateField("name")}
              placeholder="Your Name"
              required
              className="w-full bg-black/20 border border-royalGold/30 rounded-lg px-4 py-3 font-sans text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-royalGold focus:ring-1 focus:ring-royalGold/50 transition-all duration-300"
            />
          </Field>

          <Field label="Email" required>
            <input
              type="email"
              value={form.email}
              onChange={updateField("email")}
              placeholder="Your Email"
              required
              className="w-full bg-black/20 border border-royalGold/30 rounded-lg px-4 py-3 font-sans text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-royalGold focus:ring-1 focus:ring-royalGold/50 transition-all duration-300"
            />
          </Field>

          <Field label="Phone">
            <input
              type="tel"
              value={form.phone}
              onChange={updateField("phone")}
              placeholder="Your Phone"
              className="w-full bg-black/20 border border-royalGold/30 rounded-lg px-4 py-3 font-sans text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-royalGold focus:ring-1 focus:ring-royalGold/50 transition-all duration-300"
            />
          </Field>

          <Field label="Message" required>
            <textarea
              value={form.message}
              onChange={updateField("message")}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full bg-black/20 border border-royalGold/30 rounded-lg px-4 py-3 font-sans text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-royalGold focus:ring-1 focus:ring-royalGold/50 transition-all duration-300 resize-none"
            />
          </Field>

          <div className="mt-2">
            <Button
              text={isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              variant="primary"
              onClick={handleButtonClick}
              disabled={isSubmitting}
            />
          </div>

          {result && (
            <div
              className={`flex items-center gap-2 mt-3 text-sm font-sans ${
                result.type === "success"
                  ? "text-green-400"
                  : "text-roseMist"
              }`}
            >
              {result.type === "success" ? (
                <CheckCircle className="w-4 h-4 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{result.message}</span>
            </div>
          )}
        </form>
      </div>

      {/* ─── Right Column ─── */}
      <div className="lg:flex-[4] flex flex-col gap-6">
        {/* Top — Contact Info */}
        <div className="flex-1 rounded-2xl border border-royalGold/60 bg-gbrown p-8 md:p-10 shadow-lg shadow-royalGold/10 flex flex-col items-center justify-center text-center">
          <img
            src="https://res.cloudinary.com/dfr5w7ayr/image/upload/v1776364081/logo_gemeni_golden-removebg-preview_1_blfena.svg"
            alt="Rachha"
            className="h-20 md:h-24 mb-4"
          />

          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-royalGold/80 mb-6">
            Get In Touch
          </p>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <div className="flex items-center gap-3 text-left">
              <Phone className="w-4 h-4 text-royalGold shrink-0" />
              <span className="font-sans text-sm text-white/80">
                +91 93352 43958
              </span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <Mail className="w-4 h-4 text-royalGold shrink-0" />
              <span className="font-sans text-sm text-white/80">
                rachha346@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <MapPin className="w-4 h-4 text-royalGold shrink-0" />
              <span className="font-sans text-sm text-white/80">
                Thane, Mumbai, Maharashtra
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <SocialIcon platform="whatsapp" href="https://wa.me/9335243958" />
            <SocialIcon platform="instagram" href="#" />
            <SocialIcon platform="facebook" href="#" />
            <SocialIcon platform="twitter" href="#" />
          </div>
        </div>

        {/* Bottom — Map */}
        <div className="flex-1 rounded-2xl border border-royalGold/60 bg-gbrown shadow-lg shadow-royalGold/10 relative min-h-[200px] md:min-h-0 overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Thane,+Maharashtra&z=12&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rachha Location"
          />
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-royalGold">
        {label}
        {required && <span className="text-roseMist/60 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

const SOCIAL_PATHS: Record<string, string> = {
  whatsapp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  facebook:
    "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  twitter:
    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
};

function SocialIcon({ platform, href }: { platform: string; href: string }) {
  const path = SOCIAL_PATHS[platform];
  return (
    <a
      href={href}
      className="w-11 h-11 rounded-full border border-royalGold/50 flex items-center justify-center text-royalGold hover:bg-royalGold hover:text-gbrown transition-all duration-300"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[18px] h-[18px]"
      >
        {path ? <path d={path} /> : null}
      </svg>
    </a>
  );
}
