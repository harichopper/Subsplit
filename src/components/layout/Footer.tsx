export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p className="font-body text-sm">
          &copy; {new Date().getFullYear()} Subsplit. All rights reserved.
        </p>
        <p className="font-body text-xs mt-2">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
