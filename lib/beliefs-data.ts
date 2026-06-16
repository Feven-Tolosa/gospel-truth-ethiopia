export interface Belief {
  en: string;
  am: string;
  body: string;
  icon: string;
}

export const beliefs: Belief[] = [
  {
    en: "The Holy Trinity",
    am: "ቅድስት ሥላሴ",
    body: "One God eternally existing in three persons: Father, Son, and Holy Spirit — equal in power and glory.",
    icon: "trinity",
  },
  {
    en: "The Divinity of Christ",
    am: "የኢየሱስ ክርስቶስ አምላክነትና ሰውነት",
    body: "Jesus Christ is fully God and fully man, born of a virgin, who lived sinlessly, died for our sins, and rose bodily from the dead.",
    icon: "cross",
  },
  {
    en: "Authority of Scripture",
    am: "የመጽሓፍ ቅዱስ ስልጣን",
    body: "The Bible is the inspired, inerrant Word of God — the supreme and final authority in all matters of faith and life.",
    icon: "book",
  },
  {
    en: "The Gospel of Grace",
    am: "የጸጋው ወንጌል",
    body: "Salvation is by grace alone, through faith alone, in Christ alone — not by human merit or works (Ephesians 2:8–9).",
    icon: "heart",
  },
  {
    en: "Forgiveness of Sins",
    am: "በኃጢአት ስርየት",
    body: "Through Christ's atoning sacrifice, God freely and fully forgives all who repent and believe in Jesus as Lord and Savior.",
    icon: "check",
  },
  {
    en: "The Second Coming",
    am: "በዳግም ምጽአት",
    body: "Jesus Christ will return bodily and visibly to judge the living and the dead and to establish His eternal kingdom.",
    icon: "clock",
  },
];
