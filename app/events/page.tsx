const events = [
  { month: "Jul", day: "6", title: "Sunday Worship & Lord's Supper", titleAm: "የእሑድ አምልኮና ጌታ እራት", time: "9:30 AM", location: "Main Hall, Jimma", tag: "Weekly" },
  { month: "Jul", day: "12", title: "Regional Elders' Gathering", titleAm: "የሽማግሌዎች ጉባኤ", time: "9:00 AM", location: "Jimma", tag: "Leadership" },
  { month: "Jul", day: "18", title: "Youth Fellowship", titleAm: "የወጣቶች ኅብረት", time: "4:00 PM", location: "Youth Hall, Jimma", tag: "Youth" },
  { month: "Aug", day: "2", title: "Baptism Sunday", titleAm: "የጥምቀት እሑድ", time: "9:30 AM", location: "Main Hall, Jimma", tag: "Celebration" },
];

export const metadata = {
  title: "Events | Gospel Truth Church Ethiopia",
};

export default function EventsPage() {
  return (
    <main className="pt-[70px]">
      <section className="bg-navy px-6 py-16 text-center">
        <div className="section-label justify-center">Upcoming Events</div>
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Gather with Us
        </h1>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {events.map((e, i) => (
            <div
              key={i}
              className="grid grid-cols-[64px_1fr_auto] items-center gap-5 rounded-lg border border-black/5 bg-white p-5 shadow-sm transition hover:border-gold hover:shadow-md dark:bg-navy-mid dark:border-white/10"
            >
              <div className="rounded bg-navy py-2.5 text-center text-white">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gold">
                  {e.month}
                </div>
                <div className="font-serif text-2xl font-bold leading-none">
                  {e.day}
                </div>
              </div>
              <div>
                <div className="font-serif text-base font-semibold">
                  {e.title}
                </div>
                <div className="mb-1 font-ethiopic text-sm text-neutral-500 dark:text-neutral-400">
                  {e.titleAm}
                </div>
                <div className="flex gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                  <span>{e.time}</span>
                  <span>{e.location}</span>
                </div>
              </div>
              <div className="hidden whitespace-nowrap rounded-sm bg-gold-pale px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#855a00] dark:bg-gold/15 dark:text-gold-light sm:block">
                {e.tag}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
