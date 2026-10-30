
import { site } from '@/data/site';

export default function WhatsAppButton() {
  const whatsappNumber = site.contact.phone.replace(/[^0-9]/g, '');

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello Eventia Pharmaceuticals, I would like to connect.'
  )}`;

  return (
    <aside aria-label="WhatsApp support" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp (opens in a new tab)"
        className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] active:scale-95 sm:size-16"
      >
        {/* Pulsing glow */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30 duration-1000" />

        {/* Official WhatsApp SVG logo */}
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="size-8 fill-current sm:size-9"
        >
          <path d="M16.01 3C8.84 3 3.01 8.82 3.01 15.99c0 2.29.6 4.53 1.75 6.5L3 29l6.67-1.75a12.97 12.97 0 0 0 6.33 1.65h.01c7.16 0 13-5.83 13-13 0-3.47-1.35-6.73-3.81-9.19A12.91 12.91 0 0 0 16.01 3Zm-.01 23.7h-.01a10.8 10.8 0 0 1-5.5-1.51l-.4-.24-4.08 1.07 1.09-3.98-.26-.41a10.74 10.74 0 0 1-1.65-5.64C5.19 10.06 10.05 5.2 16.02 5.2c2.9 0 5.62 1.13 7.67 3.18a10.77 10.77 0 0 1 3.17 7.67c0 5.98-4.87 10.65-10.86 10.65Zm5.95-7.98c-.33-.17-1.96-.97-2.26-1.08-.3-.11-.52-.17-.74.17-.22.33-.85 1.08-1.04 1.3-.19.22-.39.25-.72.08-.33-.17-1.39-.51-2.65-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.78-1.01-2.43-.26-.63-.53-.54-.74-.55h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.17.22 2.32 3.54 5.62 4.96.78.34 1.39.54 1.87.69.79.25 1.51.22 2.08.13.63-.09 1.96-.8 2.24-1.57.28-.77.28-1.43.19-1.57-.08-.14-.3-.22-.63-.39Z" />
        </svg>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-night px-3 py-1.5 text-xs font-bold text-white shadow-lg group-hover:block sm:text-sm">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
