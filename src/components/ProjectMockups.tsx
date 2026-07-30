"use client";

export function ProjectTrackerMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-primary text-sm">Project Tracker</h4>
        <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">
          Active
        </span>
      </div>
      <div className="space-y-4">
        {[
          { label: "Frontend", pct: 85, color: "bg-blue-500" },
          { label: "Backend API", pct: 70, color: "bg-emerald-500" },
          { label: "Testing", pct: 45, color: "bg-amber-500" },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-gray-600">{item.label}</span>
              <span className="font-medium text-gray-900">{item.pct}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full`}
                style={{ width: `${item.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LaundryServiceMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-primary text-sm">Laundry Service</h4>
        <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">
          Dashboard
        </span>
      </div>
      <div className="space-y-3">
        {[
          { id: "#1042", status: "Washing", time: "35 min left", dot: "bg-blue-500" },
          { id: "#1041", status: "Ready", time: "Pickup today", dot: "bg-green-500" },
          { id: "#1040", status: "Delivered", time: "Yesterday", dot: "bg-gray-400" },
        ].map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2.5 h-2.5 rounded-full ${order.dot}`} />
              <div>
                <p className="text-sm font-medium text-gray-900">{order.id}</p>
                <p className="text-xs text-gray-500">{order.status}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{order.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OrderlyMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-primary text-sm">Orderly</h4>
        <span className="text-xs bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full font-medium">
          Kanban
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          {
            col: "To Do",
            cards: ["Design system", "Auth flow"],
            color: "border-t-red-400",
          },
          {
            col: "In Progress",
            cards: ["API endpoints"],
            color: "border-t-yellow-400",
          },
          {
            col: "Done",
            cards: ["DB schema", "CI/CD"],
            color: "border-t-green-400",
          },
        ].map((column) => (
          <div key={column.col}>
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {column.col}
            </p>
            <div className="space-y-1.5">
              {column.cards.map((card) => (
                <div
                  key={card}
                  className={`bg-gray-50 p-2 rounded-lg text-[11px] text-gray-700 border-t-2 ${column.color}`}
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
