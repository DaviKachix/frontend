export default function Intro() {
  return (
    <section className="px-6 md:px-20 py-24 bg-white">

      {/* ===== TOP GRID ===== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <p className="text-sm uppercase tracking-wide text-lime-400 mb-4">
            About PAKIA
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-8">
            A Movement for Pastors’ Kids Worldwide
          </h2>

          <div className="space-y-5 text-black font-semibold leading-relaxed text-[15.5px]">

            <p>
              Pastors’ Kids International Association (PAKIA) is a platform created 
              to bring together pastors’ kids in a shared space of identity, purpose, 
              and belonging. It exists to ensure that no PK walks their journey alone.
            </p>

            <p>
              Growing up in ministry comes with unique expectations, pressures, and 
              responsibilities. PAKIA provides a supportive environment where pastors’ 
              kids can connect, openly share experiences, and build meaningful 
              relationships rooted in understanding and faith.
            </p>

            <p>
              Through fellowship, mentorship, and active involvement in ministry, 
              PAKIA empowers pastors’ kids to discover their calling, strengthen 
              their spiritual foundation, and actively contribute to the mission 
              of the church in their own voice.
            </p>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          {/* QUOTE CARD */}
          <div className="p-8 rounded-2xl border border-gray-100 shadow-sm bg-gradient-to-br from-lime-400 to-blue-600 transition hover:shadow-md">

            <p className="text-black font-semibold leading-relaxed text-[15.5px]">
              “PAKIA is more than an association—it is a family. A place where 
              pastors’ kids find strength in unity, purpose in service, and 
              confidence in their shared journey.”
            </p>

            <div className="mt-6 border-t pt-4">
              <p className="text-black font-semibold">
                PAKIA Leadership
              </p>
              <p className="text-sm text-gray-600">
                Pastors’ Kids International Association
              </p>
            </div>
          </div>

          {/* IMAGE BELOW QUOTE */}
          <div className="overflow-hidden rounded-2xl shadow-sm border border-gray-100">
            <img
              src="/african-children.jpg"
              alt="PAKIA Community"
              className="w-full h-56 object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>

      </div>


    </section>
  );
}