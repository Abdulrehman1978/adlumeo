export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary-container focus:text-black focus:font-label-technical focus:text-xs focus:font-bold focus:uppercase focus:shadow-2xl"
    >
      Skip to main content
    </a>
  );
}
