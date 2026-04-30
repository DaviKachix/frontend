export default function WelcomeCard({ user }: any) {
  return (
    <div className="bg-white border rounded-xl p-5">
      <h2 className="text-xl font-semibold text-gray-800">
        Welcome, {user?.full_name || "User"}
      </h2>
      <p className="text-gray-600 mt-1 text-sm">
        Stay connected, grow spiritually, and participate in ministry activities.
      </p>
    </div>
  );
}