const testimonials = [
  {
    name: "Teammate",
    text:
      "Very detail-oriented developer with a strong sense of UI polish and responsiveness.",
  },

  {
    name: "Mentor",
    text:
      "Quick learner who adapts fast to new technologies and consistently improves user experience quality.",
  },

  {
    name: "Classmate",
    text:
      "Delivered modern interfaces with excellent communication and attention to frontend details.",
  },
];

export function Testimonials() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-blue-500 mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold">
            What People Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="glass rounded-3xl p-8"
            >
              <p className="text-zinc-400 leading-relaxed mb-6">
                &ldquo;{item.text}&rdquo;
            </p>

              <p className="font-semibold">
                — {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}