import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-card-border/50 bg-background/80 backdrop-blur-md">
      <a
        href="#main-content"
        className="absolute left-4 -top-full z-50 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-all focus:top-4"
      >
        Skip to content
      </a>
      <nav aria-label="Main navigation" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          EV<span className="text-accent">.</span>
        </a>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
