import { Logo } from './Logo';

export function Footer() {
  return (
    <footer>
      <div className="hidden">
      <div className="mt-8 flex h-24 flex-col items-center justify-center p-2">
        <Logo />
      </div>
        </div>
    </footer>
  );
}
