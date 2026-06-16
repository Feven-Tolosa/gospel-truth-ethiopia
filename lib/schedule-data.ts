export interface ServiceItem {
  day: string;
  dayAm: string;
  name: string;
  nameAm: string;
  time: string;
  note?: string;
  noteAm?: string;
}

export const weeklySchedule: ServiceItem[] = [
  {
    day: "Sunday",
    dayAm: "እሑድ",
    name: "Worship & Lord's Supper",
    nameAm: "አምልኮና ጌታ እራት",
    time: "9:30 AM – 12:00 PM",
  },
  {
    day: "Sunday",
    dayAm: "እሑድ",
    name: "Choir Worship",
    nameAm: "የዘማሪዎች አምልኮ",
    time: "5:00 PM – 6:00 PM",
    note: "Leads into evening Bible teaching",
    noteAm: "ከዚያ ቀጥሎ የቃሉ ትምህርት ይከተላል",
  },
  {
    day: "Sunday",
    dayAm: "እሑድ",
    name: "Bible Teaching",
    nameAm: "የቃሉ ትምህርት",
    time: "6:00 PM – 2:00 AM",
  },
  {
    day: "Monday",
    dayAm: "ሰኞ",
    name: "Bible Teaching",
    nameAm: "የቃሉ ትምህርት",
    time: "6:00 PM – 2:00 AM",
  },
  {
    day: "Tuesday",
    dayAm: "ማክሰኞ",
    name: "Prayer",
    nameAm: "ጸሎት",
    time: "6:00 PM – 2:00 AM",
  },
  {
    day: "Wednesday",
    dayAm: "ረቡዕ",
    name: "Bible Study",
    nameAm: "የመጽሐፍ ቅዱስ ጥናት",
    time: "6:00 PM – 2:00 AM",
  },
  {
    day: "Thursday",
    dayAm: "ሐሙስ",
    name: "Choir Practice",
    nameAm: "የዘማሪዎች ልምምድ",
    time: "6:00 PM – 2:00 AM",
  },
  {
    day: "Friday",
    dayAm: "አርብ",
    name: "Worship & Praise",
    nameAm: "አምልኮና ምስጋና",
    time: "6:00 PM – 2:00 AM",
  },
  {
    day: "Saturday",
    dayAm: "ቅዳሜ",
    name: "Youth Fellowship",
    nameAm: "የወጣቶች ኅብረት",
    time: "4:00 PM – 6:00 PM",
    note: "Worship, preaching, and a solo song",
    noteAm: "አምልኮ፣ ስብከት እና የሶሎ መዝሙር",
  },
];
