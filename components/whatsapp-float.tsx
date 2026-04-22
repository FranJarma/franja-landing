const whatsappHref = "https://wa.me/543874450922";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-[max(5.5rem,env(safe-area-inset-bottom))] right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/70 bg-[#0b0b0b]/90 text-accent shadow-[0_0_24px_rgba(0,255,156,0.22)] backdrop-blur transition hover:-translate-y-1 hover:bg-accent hover:text-black md:bottom-5 md:right-5 md:h-14 md:w-14"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.19 6.4 2.19 11.83c0 1.74.45 3.43 1.31 4.92L2 22l5.4-1.42a9.8 9.8 0 0 0 4.63 1.18h.01c5.43 0 9.84-4.4 9.84-9.83a9.77 9.77 0 0 0-2.83-7.02Zm-7.02 15.2h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.2.84.85-3.12-.2-.32a8.15 8.15 0 0 1-1.26-4.37 8.25 8.25 0 0 1 8.26-8.24c2.2 0 4.26.85 5.82 2.41a8.18 8.18 0 0 1 2.42 5.83 8.25 8.25 0 0 1-8.24 8.28Zm4.53-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.09-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.12-1.07-.39-2.03-1.23-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.3.37-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.38-.78-1.9-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.06 0 1.21.89 2.39 1.01 2.56.12.17 1.74 2.65 4.21 3.72.59.26 1.05.42 1.41.54.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
      </svg>
    </a>
  );
}
