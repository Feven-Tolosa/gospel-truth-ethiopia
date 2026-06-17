import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <section className='bg-navy'>
      {/* Hero Banner */}
      <div className='relative w-full overflow-hidden'>
        <Image
          src='/image/channels_banner.png'
          alt='Gospel Truth Church'
          width={1920}
          height={1080}
          priority
          className='h-auto w-full object-cover'
        />

        <div className='absolute inset-0 bg-navy/20' />
        <div className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy via-navy/70 to-transparent' />
        {/* Optional Text Overlay */}
        <div className='absolute bottom-8 left-1/2 w-full max-w-7xl -translate-x-1/2 px-6 hidden md:block'>
          <div className='section-label mb-3 text-white/80'>
            Welcome to Gospel Truth Church
          </div>

          <h3 className='max-w-3xl font-serif text-3xl font-bold text-white  md:text-3xl lg:text-5xl'>
            Proclaiming the Truth of God&apos;s Word
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className='mx-auto max-w-7xl px-6 py-16 lg:py-24'>
        <div className='grid gap-12 lg:grid-cols-[1fr_auto_320px] lg:gap-16'>
          {/* Left Content */}
          <div>
            <div className='section-label mb-4'>Who We Are</div>
            <h2 className='mb-6 font-serif text-3xl font-semibold leading-tight text-white lg:text-4xl'>
              A Church Built on the Word of God
            </h2>
            <p className='mb-5 text-base leading-relaxed text-white/75 lg:text-lg'>
              Gospel Truth Church is an evangelical assembly committed to the
              fundamental pillars of Christian faith — the Holy Trinity, the
              divinity and humanity of Jesus Christ, the authority of Scripture,
              the gospel of grace, and the forgiveness of sins.
            </p>
            <p className='font-ethiopic text-sm leading-loose text-white/60 lg:text-base'>
              የወንጌል እውነት ቤተክርስቲያን በዋነኞቹ አእማደ እምነቶች፣ በቅድስት ሥላሴ ፣ በኢየሱስ ክርስቶስ
              አምላክነትና ሰውነት፣ በመጽሓፍ ቅዱስ ስልጣን፣ በጸጋው ወንጌል፣ በኃጢአት ስርየት፣ በዳግም ምጽአት ፣
              በሚመጣው ፍርድ የምታምን ወንጌላዊት ጉባኤ ናት::
            </p>
            <p className='font-ethiopic text-sm leading-loose text-white/60 lg:text-base'>
              {' '}
              በደቡብ፤ በደቡብ ምዕራብ፤ እና በምዕራብ ኢትዮጵያ አጥቢያ ጉባኤዎች ያሏት ናት፡፡
            </p>
            <p className='font-ethiopic text-sm leading-loose text-white/60 lg:text-base'>
              ቤተ ክርስቲያኒቱ በሽማግሌዎች አስተዳደር የምትመራ ስትሆን ፤ የቃሉ አገልጋዮችና የመንፈሳዊ ዘርፍ አባላት
              ሁሉ በሽማግሌዎች አመራር ስር የሚመሩ ናቸው፡፡
            </p>
            <p className='font-ethiopic text-sm leading-loose text-white/60 lg:text-base'>
              የቤተ ክርስቲያኒቱ ዋና አላማም ወንጌልን ያለፍርሃት በግልጽነት መስበክና ፤ ክርስቶስን ማዕከል ያደረጉና
              እሱን ብቻ የሚገልጡና የሚያከብሩ፤ የአባቶቻችንን አስተምህሮ መከራን በመቀበልና ፤ዋጋን በመክፈል ለሰው
              ልጆች ማድረስ ነው፡፡ 2ቆሮንቶስ 4፡1_18
            </p>
          </div>

          {/* Divider */}
          <div className='hidden w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent lg:block' />

          {/* Stats */}
          <div className='grid grid-cols-3 gap-6 border-t border-white/10 pt-8 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-12 lg:pt-0'>
            <div className='text-center lg:text-left'>
              <div className='font-serif text-4xl font-bold text-gold lg:text-5xl'>
                3+
              </div>
              <div className='mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50'>
                Regions Served
              </div>
            </div>

            <div className='text-center lg:text-left'>
              <div className='font-serif text-4xl font-bold text-gold lg:text-5xl'>
                ∞
              </div>
              <div className='mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50'>
                Lives Changed
              </div>
            </div>

            <div className='text-center lg:text-left'>
              <div className='font-serif text-4xl font-bold text-gold lg:text-5xl'>
                1
              </div>
              <div className='mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50'>
                Gospel Proclaimed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
