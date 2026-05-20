import CardScheduleDestination from "./_components/CardScheduleDestination";

export default function DetailDestination() {
  return (
    <div className="bg-gray-200 min-h-screen p-6 flex justify-center items-start pt-10">

      <div className="flex border border-gray-300 text-sm">

        <CardScheduleDestination
          title="Rab, 20 Mei 2026"
          price="IDR 3.862.372"
          active
        />

        <CardScheduleDestination
          title="Kam, 21 Mei 2026"
          price="IDR 3.664.571"
        />

        <CardScheduleDestination
          title="Jum, 22 Mei 2026"
          price="IDR 3.510.124"
        />

        <CardScheduleDestination
          title="Sab, 23 Mei 2026"
          price="IDR 3.801.503"
        />

        <CardScheduleDestination
          title="Min, 24 Mei 2026"
          price="IDR 3.510.124"
        />

        <CardScheduleDestination
          title="Sen, 25 Mei 2026"
          price="IDR 3.510.124"
        />

        <CardScheduleDestination
          title="Sel, 26 Mei 2026"
          price="IDR 4.046.380"
        />

      </div>

    </div>
  );
}