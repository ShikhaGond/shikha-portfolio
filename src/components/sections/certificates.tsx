const certificates = [
  "Introduction to Front-End Development — Coursera",

  "Responsive Web Design — freeCodeCamp",

  "JavaScript Algorithms & Data Structures — freeCodeCamp",

  "Front-End Development Libraries (React) — freeCodeCamp",

  "Certificate in Multimedia — Webel",
];

export function Certificates() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-blue-500 mb-4">
            Certifications
          </p>

          <h2 className="text-4xl font-bold">
            Learning & Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {certificates.map((certificate) => (
            <div
              key={certificate}
              className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <p className="text-lg font-medium">
                {certificate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}