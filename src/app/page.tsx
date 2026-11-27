"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "登録メールを確認してね。メール内のリンクから登録を完了できます。"
      );
    }
  }

  async function handleSignIn() {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("ログインしました！");
    }
  }

  return (
    <main className="min-h-screen px-5 py-12">
      <div className="mx-auto max-w-md">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm tracking-widest text-[#8b9b78]">
            RIKKA'S BOOKSHELF
          </p>
          <h1 className="text-3xl font-bold">六花の本棚</h1>
          <p className="mt-3 text-sm text-[#827e74]">
            六花ちゃんの生涯の読書記録
          </p>
        </header>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            本棚にログイン
          </h2>

          <label className="mb-2 block text-sm">
            メールアドレス
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレス"
            className="mb-5 w-full rounded-lg border p-3"
          />

          <label className="mb-2 block text-sm">
            パスワード
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワード（6文字以上）"
            className="mb-6 w-full rounded-lg border p-3"
          />

          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full rounded-lg bg-[#8b9b78] p-3 font-semibold text-white disabled:opacity-50"
          >
            ログイン
          </button>

          <button
            onClick={handleSignUp}
            disabled={loading}
            className="mt-3 w-full rounded-lg border border-[#8b9b78] p-3 font-semibold text-[#657653] disabled:opacity-50"
          >
            新しいアカウントを作成
          </button>

          {message && (
            <p className="mt-5 text-sm leading-6 text-[#827e74]">
              {message}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
