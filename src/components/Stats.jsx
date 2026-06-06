const stats = [
  {
    number: "50K+",
    label: "Hours Tracked"
  },
  {
    number: "12K+",
    label: "Tasks Completed"
  },
  {
    number: "98%",
    label: "User Satisfaction"
  }
];

export default function Stats() {
  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {stats.map((item) => (
          <div
            key={item.label}
            className="glass rounded-3xl p-8 text-center"
          >
            <h2 className="text-5xl font-bold text-violet-500">
              {item.number}
            </h2>

            <p className="text-gray-400 mt-3">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}