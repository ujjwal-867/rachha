import { useState } from "react";
import { Mail, Phone, Check } from "lucide-react";

const SOCIAL_LINKS = [
  {
    platform: "WhatsApp",
    href: "https://wa.me/9335243958",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    color: "#25D366",
    delay: 0,
  },
  {
    platform: "Instagram",
    href: "https://instagram.com/rachha",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    color: "#E1306C",
    delay: 0.1,
  },
  {
    platform: "Facebook",
    href: "https://facebook.com/rachha",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    color: "#1877F2",
    delay: 0.2,
  },
  {
    platform: "Twitter",
    href: "https://twitter.com/rachha",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    color: "#000000",
    delay: 0.3,
  },
];

function CopyButton({
  value,
  label,
  icon: Icon,
  href,
}: {
  value: string;
  label: string;
  icon: typeof Mail;
  href: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.open(href, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="group relative w-12 h-12 rounded-full border-2 border-royalGold flex items-center justify-center text-royalGold hover:scale-110 transition-all duration-300 animate-fadeInUp cursor-pointer"
      style={{ animationDelay: "0.4s", animationFillMode: "both" }}
    >
      {copied ? (
        <Check className="w-5 h-5 text-green-400" />
      ) : (
        <Icon className="w-5 h-5" />
      )}

      <span className="absolute right-full mr-3 bg-gbrown text-royalGold text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-royalGold/30 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg shadow-black/30">
        {copied ? "Copied!" : label}
      </span>
    </button>
  );
}

export default function FloatingSocialBar() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pop-in {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        .floating-social-btn {
          position: relative;
          animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) both;
        }
        .floating-social-btn::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: inherit;
          filter: blur(6px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .floating-social-btn:hover::before {
          opacity: 0.6;
        }
        .floating-social-btn::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 50%;
          padding: 1px;
          background: linear-gradient(135deg, #D4AF37, rgba(212, 175, 55, 0.3), #D4AF37);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: rotateGlow 3s linear infinite;
        }
        @keyframes rotateGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes breathe {
          0%, 100% { box-shadow: 0 0 8px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.1); }
          50% { box-shadow: 0 0 16px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.25), 0 0 60px rgba(212, 175, 55, 0.1); }
        }
        .floating-social-btn {
          animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) both, breathe 3s ease-in-out 0.5s infinite;
        }
      `}</style>

      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {SOCIAL_LINKS.map(({ platform, href, path, color, delay }) => (
          <a
            key={platform}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-social-btn w-12 h-12 rounded-full border-2 border-royalGold/80 flex items-center justify-center text-royalGold hover:text-white transition-all duration-300 group"
            style={{
              animationDelay: `${delay}s`,
              background: `linear-gradient(135deg, rgba(53, 34, 14, 0.95), rgba(53, 34, 14, 0.8))`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = color;
              el.style.borderColor = color;
              el.style.boxShadow = `0 0 20px ${color}66, 0 0 40px ${color}33`;
              el.style.transform = "scale(1.15)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "linear-gradient(135deg, rgba(53, 34, 14, 0.95), rgba(53, 34, 14, 0.8))";
              el.style.borderColor = "";
              el.style.boxShadow = "";
              el.style.transform = "";
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px]">
              <path d={path} />
            </svg>
            <span className="absolute right-full mr-3 bg-gbrown text-royalGold text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-royalGold/30 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg shadow-black/30">
              {platform}
            </span>
          </a>
        ))}

        <div className="w-full h-px bg-gradient-to-r from-transparent via-royalGold/50 to-transparent my-0.5" />

        <CopyButton
          value="rachha346@gmail.com"
          label="Email"
          icon={Mail}
          href="mailto:rachha346@gmail.com"
        />

        <CopyButton
          value="+919335243958"
          label="Phone"
          icon={Phone}
          href="tel:+919335243958"
        />
      </div>
    </>
  );
}
