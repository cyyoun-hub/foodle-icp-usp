"use client";

import { useEffect, useState } from "react";
import { gmSections } from "@/content/global";

// 고정 목차. 화면에 보이는 섹션을 따라 현재 항목이 바뀐다.
export default function GmNav() {
  const [active, setActive] = useState(gmSections[0].id);

  useEffect(() => {
    const els = gmSections.map((s) => document.getElementById(s.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.2, 0.5] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="gm-nav">
      <div className="wrap gm-nav-in">
        <a href="#top" className="brandmark" aria-label="Foodle 맨 위로">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/foodle-logo.png" alt="Foodle" width={645} height={185} />
        </a>
        <nav className="gm-toc" aria-label="섹션 목차">
          {gmSections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="gm-toc-link" aria-current={active === s.id ? "true" : undefined}>
              <b>{s.no}</b>
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
