import HistoriesTable from "../features/payment/components/HistoriesTable";

export default function BookingHistortyPage() {
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1275px]">
      <div className="p-6">
        <div className="text-2xl font-bold text-white">BOOKING HISTORIES</div>
        <div className="py-6 px-8">
          <HistoriesTable />
        </div>
      </div>
    </div>
  );
}
