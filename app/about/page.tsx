export const metadata = {
  title: "About Us | Gospel Truth Church Ethiopia",
};

export default function AboutPage() {
  return (
    <main className="pt-[70px]">
      <section className="bg-navy px-6 py-16 text-center">
        <div className="section-label justify-center">About Us</div>
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Who We Are
        </h1>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Gospel Truth Church is an evangelical assembly committed to the
            fundamental pillars of the Christian faith — the Holy Trinity,
            the divinity and humanity of Jesus Christ, the authority of
            Scripture, the gospel of grace, the forgiveness of sins, the
            second coming of Christ, and the coming judgment.
          </p>
          <p className="mb-6 rounded-lg border-l-4 border-gold bg-gold-pale p-6 font-ethiopic text-base leading-loose text-neutral-700 dark:bg-navy-mid dark:text-neutral-300">
            የወንጌል እውነት ቤተክርስቲያን ፦ በዋነኞቹ አእማደ እምነቶች፣ በቅድስት ሥላሴ ፣ በኢየሱስ
            ክርስቶስ አምላክነትና ሰውነት፣ በመጽሓፍ ቅዱስ ስልጣን፣ በጸጋው ወንጌል፣ በኃጢአት ስርየት፣
            በዳግም ምጽአት ፣ በሚመጣው ፍርድ የምታምን ወንጌላዊት ጉባኤ ናት።
          </p>
          <p className="mb-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
            We have local congregations across Southern, Southwestern, and
            Western Ethiopia. The church is led by an eldership, with all
            ministers of the Word and members of every spiritual department
            serving under the elders&apos; oversight.
          </p>
          <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
            Our primary aim is to preach the gospel boldly and without fear —
            centering on Christ alone, holding fast to the teaching of our
            spiritual fathers, and bearing the cost of that calling for the
            sake of others.{" "}
            <span className="font-medium text-gold">2 Corinthians 4:1–18</span>
          </p>
        </div>
      </section>
    </main>
  );
}
