export default function StatCard({ title, value, icon, color }: any) {
  return (
    <div className="bg-white border rounded-xl p-5 flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className={`text-2xl font-bold mt-1 ${color}`}>
          {value}
        </p>
      </div>

      <i className={`fa-solid ${icon} text-2xl ${color}`}></i>
    </div>
  );
}