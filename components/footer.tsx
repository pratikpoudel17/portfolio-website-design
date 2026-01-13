export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="text-xl font-bold text-foreground">
            Pratik<span className="text-primary">.</span>
          </a>

          <p className="text-muted-foreground text-sm">© {currentYear} Pratik Poudel. All rights reserved.</p>

          <p className="text-muted-foreground text-sm">Crafted with passion & pixels</p>
        </div>
      </div>
    </footer>
  )
}
