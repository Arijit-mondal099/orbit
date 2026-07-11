export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-pixel text-lg">ORBIT</span>
            <p className="font-normal text-sm text-muted-foreground mt-2 max-w-xs">
              The evolution of workspaces — a new era of productivity begins with tools that adapt
              to you.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Links</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-normal text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "License (MIT)"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-normal text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6">
          <p className="font-normal text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} ORBIT. Open source and free forever.
          </p>
        </div>
      </div>
    </footer>
  );
}
