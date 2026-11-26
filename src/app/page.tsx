export default function Home() {
  return (
    <main className="min-h-screen px-5 py-10">
      <div className="mx-auto max-w-lg">
        <header className="mb-10">
          <p className="mb-2 text-sm tracking-widest text-[#8b9b78]">
            RIKKA'S BOOKSHELF
          </p>
          <h1 className="text-3xl font-bold tracking-wide">
            六花の本棚
          </h1>
          <p className="mt-3 text-sm text-[#827e74]">
            六花ちゃんの生涯の読書記録
          </p>
        </header>

        <section className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-[#827e74]">WELCOME</p>
          <h2 className="mt-2 text-xl font-semibold">
            六花ちゃんの本棚へようこそ。
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#827e74]">
            これから出会うたくさんの本と、
            心に残った言葉を記録していこう。
          </p>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-2xl">📚</p>
            <h3 className="mt-3 font-semibold">本棚</h3>
            <p className="mt-1 text-xs text-[#827e74]">
              読んだ本の記録
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-2xl">♡</p>
            <h3 className="mt-3 font-semibold">お気に入り</h3>
            <p className="mt-1 text-xs text-[#827e74]">
              心に残った本
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-2xl">✍️</p>
            <h3 className="mt-3 font-semibold">読書の記録</h3>
            <p className="mt-1 text-xs text-[#827e74]">
              好きな一文とコメント
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-2xl">🏆</p>
            <h3 className="mt-3 font-semibold">お気に入り100冊</h3>
            <p className="mt-1 text-xs text-[#827e74]">
              生涯のお気に入り
            </p>
          </div>
        </section>

        <footer className="mt-12 text-center text-xs text-[#827e74]">
          A lifetime of stories, one book at a time.
        </footer>
      </div>
    </main>
  );
}
