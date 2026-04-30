export default function MissionVision() {
  return (
    <section className="px-6 md:px-20 py-24 bg-white">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Mission, Vision & Purpose
        </h2>
        <p className="text-black font-semibold">
          Guiding principles that shape the direction, identity, and impact of PAKIA.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {/* MISSION */}
        <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
          
          <div className="w-16 h-16 mx-auto mb-5 rounded-full overflow-hidden border">
            <img src="/children-learning.jpg" className="w-full h-full object-cover" />
          </div>

          <h3 className="text-lg font-semibold mb-3 text-blue-600">
            Mission
          </h3>

          <p className="text-black font-semibold text-sm leading-relaxed">
            To connect, disciple, and restore pastors’ kids into active ministry,
            strengthening their spiritual growth and sense of purpose.
          </p>
        </div>

        {/* VISION */}
        <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
          
          <div className="w-16 h-16 mx-auto mb-5 rounded-full overflow-hidden border">
            <img src="/youths-professional.jpg" className="w-full h-full object-cover" />
          </div>

          <h3 className="text-lg font-semibold mb-3 text-lime-400">
            Vision
          </h3>

          <p className="text-black font-semibold text-sm leading-relaxed">
            Pastors’ kids who are spiritually grounded, passionate about ministry,
            actively engaged in mission, and prepared for Christ’s return.
          </p>
        </div>

        {/* OBJECTIVES */}
        <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
          
          <div className="w-16 h-16 mx-auto mb-5 rounded-full overflow-hidden border">
            <img src="/group-african-medical-students-posed-outdoor-white-lab-coats.jpg" className="w-full h-full object-cover" />
          </div>

          <h3 className="text-lg font-semibold mb-3 text-blue-600">
            Objectives
          </h3>

          <ul className="text-black font-semibold text-sm leading-relaxed space-y-2 text-left">
            <li>• Identify and connect all PKs, including those outside the church</li>
            <li>• Build forums at Union, Conference, and Field levels</li>
            <li>• Encourage networking and fellowship</li>
            <li>• Strengthen PK identity and spiritual growth</li>
            <li>• Empower use of gifts, talents, and professions in ministry</li>
          </ul>
        </div>

        {/* METHOD */}
        <div className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
          
          <div className="w-16 h-16 mx-auto mb-5 rounded-full overflow-hidden border">
            <img src="/parent-children.jpg" className="w-full h-full object-cover" />
          </div>

          <h3 className="text-lg font-semibold mb-3 text-lime-400">
            Method
          </h3>

          <p className="text-black font-semibold text-sm leading-relaxed">
            The association fulfills its mission through structured Team PK
            Ministry initiatives that promote fellowship, mentorship,
            and active participation in church life.
          </p>
        </div>

      </div>

    </section>
  );
}