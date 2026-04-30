export default function ChallengesBlessings() {
  return (
    <section className="px-6 md:px-20 py-16 bg-lime-400 grid md:grid-cols-2 gap-10">
      <div>
        <h3 className="text-xl font-bold text-red-600">Challenges</h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>• High expectations and public scrutiny</li>
          <li>• Identity pressure</li>
          <li>• Frequent relocation</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-lime-400">Blessings</h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>• Strong spiritual upbringing</li>
          <li>• Ministry exposure early in life</li>
          <li>• Leadership development</li>
          <li>• Church community connection</li>
        </ul>
      </div>
    </section>
  );
}