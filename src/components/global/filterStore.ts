"use client";

import { useSyncExternalStore } from "react";

// 전역 필터(채널 · 시장 · 고객). URL 쿼리(ch · mk · ty)와 같은 값이고, 키워드 표와 카드 강조가 이 값을 함께 쓴다.
export type GlobalFilter = { ch: string; mk: string; ty: string };
export const ALL = "all";

const DEFAULT: GlobalFilter = { ch: ALL, mk: ALL, ty: ALL };
let current: GlobalFilter = DEFAULT;
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((l) => l());

function paint(f: GlobalFilter) {
  const root = document.querySelector<HTMLElement>(".gm");
  if (!root) return;
  root.dataset.ch = f.ch;
  root.dataset.mk = f.mk;
  root.dataset.ty = f.ty;
}

export function writeParams(patch: Record<string, string | null>) {
  const url = new URL(window.location.href);
  Object.entries(patch).forEach(([k, v]) => (v === null || v === "" || v === ALL ? url.searchParams.delete(k) : url.searchParams.set(k, v)));
  window.history.replaceState(null, "", url.toString());
}

export function setGlobal(patch: Partial<GlobalFilter>) {
  current = { ...current, ...patch };
  paint(current);
  writeParams({ ch: current.ch, mk: current.mk, ty: current.ty });
  emit();
}

// 첫 화면에서 URL의 값을 읽어 적용한다(서버 렌더와 같은 기본값으로 먼저 그리고, 그다음 적용해서 hydration 불일치를 막는다).
export function initFromUrl() {
  const q = new URLSearchParams(window.location.search);
  const pick = (k: string, ok: string[]) => (ok.includes(q.get(k) ?? "") ? (q.get(k) as string) : ALL);
  current = {
    ch: pick("ch", ["google", "linkedin"]),
    mk: pick("mk", ["KR", "JP", "US"]),
    ty: pick("ty", ["B2C", "B2B"]),
  };
  paint(current);
  emit();
}

export function useGlobalFilter(): GlobalFilter {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => current,
    () => DEFAULT
  );
}
