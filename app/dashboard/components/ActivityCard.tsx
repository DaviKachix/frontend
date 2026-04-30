export default function ActivityCard() {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <i className="fa-solid fa-clock text-lime-400"></i>
        Recent Activity
      </h3>

      <p className="text-gray-500 text-sm">
        No recent activity yet. Your participation in programs, ministry, and community will appear here.
      </p>
    </div>
  );
}