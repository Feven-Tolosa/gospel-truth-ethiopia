# Gospel Truth Church Ethiopia

**የወንጌል እውነት ቤተ ክርስቲያን**

A modern church website built to proclaim the truth of God's Word, connect believers, and make Gospel-centered resources accessible to everyone.

## ✨ Features

- Responsive, modern design with light & dark mode
- Multilingual interface: English, Amharic (አማርኛ), and Afaan Oromoo
- Dynamic YouTube sermon and playlist integration
- Church ministries, beliefs, and events
- Weekly service schedule
- Prayer requests and contact pages
- Books and biblical resources
- SEO-ready: metadata, Open Graph, sitemap, and robots
- Fast, accessible performance with Ethiopic font support

## 🛠 Built With

- [Next.js](https://nextjs.org/) 14 (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Lucide](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- [YouTube Data API](https://developers.google.com/youtube/v3)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm
- A YouTube Data API key

### Installation

```bash
git clone https://github.com/Feven-Tolosa/gospel-truth-ethiopia.git

cd gospel-truth-church

npm install
```

### Environment Variables

Create a `.env` file in the project root and add the following:

```env
YOUTUBE_CHANNEL_ID=your_channel_id
YOUTUBE_API_KEY=your_api_key
YOUTUBE_UPLOADS_PLAYLIST_ID=your_uploads_playlist_id
```

The YouTube credentials are used to fetch the latest sermons and playlists.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📜 Available Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm start`     | Run the production server    |
| `npm run lint`  | Run ESLint                   |

## 📁 Project Structure

```
app/            Pages, layout, and SEO routes (App Router)
components/     Reusable UI, layout, and home sections
context/        Language context provider
lib/            Translations, data, and YouTube helpers
public/         Static assets
```

## 🌍 Languages

The interface can be switched between English (`en`), Amharic (`am`), and Afaan Oromoo (`om`). Translations live in `lib/translations/`.

## 🎯 Our Mission

> To faithfully proclaim the Gospel of Jesus Christ, make disciples, and glorify God through the teaching of His Word.

## 📍 Location

Jimma, Ethiopia

## 🙏 Scripture

> "Preach the word; be ready in season and out of season."
> — 2 Timothy 4:2

---

**Soli Deo Gloria**
