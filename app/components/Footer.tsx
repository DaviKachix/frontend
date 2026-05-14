export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/pk-logo.jpg"
                alt="PAKIA Logo"
                className="h-11 w-11 object-contain"
              />
              <h2 className="text-sm md:text-base font-semibold text-black leading-snug">
                PASTOR'S KIDS INTERNATIONAL ASSOCIATION
              </h2>
            </div>

            <p className="text-sm font-medium text-black leading-relaxed">
              PAKIA Platform connects, empowers, and strengthens Pastors’ Kids
              through fellowship, spiritual growth, and ministry engagement.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-black">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm font-medium">
              {[
                ["My Church", "/church"],
                ["Documents", "/documents"],
                ["Events", "/events"],
                ["Leadership", "/leadership"],
                ["PK Ministry", "/ministry"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-black hover:text-red-900 transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ORGANIZATION */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-black">
              Organization
            </h3>

            <p className="text-sm font-medium text-black leading-relaxed">
              PAKIA System is supported through collaboration with ministry
              and educational partners committed to youth spiritual development.
            </p>

            <p className="text-sm font-medium text-black">
              Built for structured ministry growth and digital connection.
            </p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-black">

          <div>
            © {new Date().getFullYear()} PASTOR'S KIDS INTERNATIONAL ASSOCIATION
          </div>

          <div>
            Developed by {" "}
            <a
              href="https://www.tait.tz"
              target="_blank"
              className="font-light text-red-900 hover:text-lime-400 transition"
            >
              TAIT
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}