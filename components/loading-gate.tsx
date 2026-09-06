'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function LoadingGate() {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const next = Math.min(100, Math.round((elapsed / 1850) * 100));
      setProgress(next);
      if (next === 100) {
        setReady(true);
        window.clearInterval(timer);
      }
    }, 40);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#050607] text-[#dededb]">
      <div className="kage-grain pointer-events-none absolute inset-0" />

      <div className="relative flex w-full flex-col justify-between px-5 py-6 sm:px-9 sm:py-8">
        <header className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/45">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/30 text-[11px] text-white">
              W
            </span>
            <span>Watchtower</span>
          </div>
          <span className="hidden sm:inline">Kage / 影の道</span>
        </header>

        <section className="mx-auto flex w-full max-w-[520px] flex-1 flex-col items-center justify-center py-20">
          <div className="mb-7 text-[10px] tracking-[0.58em] text-white/50">影 の 道</div>

          <div className="kage-mark relative grid h-16 w-16 place-items-center">
            <span className="absolute h-12 w-12 rounded-full border border-white/25" />
            <span className="absolute h-4 w-4 rounded-full border border-[#f02b26]" />
            <span className="absolute h-px w-20 bg-white/35" />
            <span className="absolute h-20 w-px bg-white/20" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#f02b26] shadow-[0_0_18px_#f02b26]" />
          </div>

          <div className="mt-20 w-full">
            <div className="mb-3 flex items-center justify-between text-[9px] uppercase tracking-[0.27em] text-white/45">
              <span>Raising the mountain temple</span>
              <span>{progress}%</span>
            </div>
            <div className="h-px w-full bg-white/15">
              <div
                className="h-full bg-[#f02b26] shadow-[0_0_16px_#f02b26] transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <Link
            href="/docs"
            className={`mt-8 text-[9px] uppercase tracking-[0.3em] text-white/55 transition duration-500 hover:text-[#f02b26] ${
              ready ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
            }`}
          >
            Enter the archive →
          </Link>
        </section>

        <footer className="flex items-end justify-between text-[10px] uppercase tracking-[0.24em] text-white/35">
          <span>Watchtower archive</span>
          <span className="hidden sm:inline">A public signal</span>
        </footer>
      </div>
    </main>
  );
}