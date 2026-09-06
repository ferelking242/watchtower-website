'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const steps = [
  'CALIBRATING THE WATCH',
  'OPENING THE ARCHIVE',
  'RAISING THE TOWER',
];

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

  const step = progress < 34 ? steps[0] : progress < 72 ? steps[1] : steps[2];

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#090a0c] text-[#f4f1ed]">
      <div className="watchtower-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-[#e31d27]/10 blur-3xl" />

      <div className="relative flex w-full flex-col justify-between px-6 py-7 sm:px-10 sm:py-9 lg:px-16">
        <header className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-white/55">
          <Link href="/docs" className="flex items-center gap-3 text-white transition hover:text-[#e31d27]">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/25 text-sm text-white">
              W
            </span>
            <span>Watchtower</span>
          </Link>
          <span className="hidden sm:inline">Documentation / 01</span>
        </header>

        <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center py-24 text-center">
          <div className="mb-10 flex flex-col items-center gap-5">
            <span className="text-[11px] tracking-[0.55em] text-white/45">影の道</span>
            <div className="relative grid h-16 w-16 place-items-center">
              <span className="absolute h-12 w-12 rounded-full border border-white/25" />
              <span className="absolute h-4 w-4 rounded-full border border-[#e31d27]" />
              <span className="absolute h-px w-20 bg-white/35" />
              <span className="absolute h-20 w-px bg-white/20" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#e31d27] shadow-[0_0_22px_#e31d27]" />
            </div>
          </div>

          <p className="mb-5 text-[10px] uppercase tracking-[0.48em] text-white/45">
            A field guide for the open archive
          </p>
          <h1 className="watchtower-display text-6xl leading-[0.9] sm:text-8xl">
            Keep watch.
            <br />
            <span className="text-white/45">Build openly.</span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
            The Watchtower documentation is being assembled. Learn how the app discovers sources,
            renders their layouts, and stays extensible.
          </p>

          <div className="mt-16 w-full max-w-xl">
            <div className="mb-3 flex justify-between text-[10px] uppercase tracking-[0.28em] text-white/45">
              <span>{ready ? 'Archive ready' : step}</span>
              <span>{progress}%</span>
            </div>
            <div className="h-px w-full bg-white/15">
              <div
                className="h-full bg-[#e31d27] shadow-[0_0_18px_#e31d27] transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <Link
            href="/docs"
            className={`mt-8 border border-white/20 px-6 py-3 text-[10px] uppercase tracking-[0.28em] text-white transition duration-500 hover:border-[#e31d27] hover:bg-[#e31d27] ${
              ready ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
            }`}
          >
            Enter the documentation
          </Link>
        </section>

        <footer className="flex items-end justify-between text-[10px] uppercase tracking-[0.24em] text-white/35">
          <span>Ferelking242 / Watchtower</span>
          <span className="hidden sm:inline">The signal is public</span>
        </footer>
      </div>
    </main>
  );
}