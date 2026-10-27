"use client";

import { useState } from "react";
import { faqs } from "@/content/foodle";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="faq-item" data-open={isOpen}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              aria-controls={`faq-a-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {f.q}
              <span className="faq-icon" aria-hidden="true">
                +
              </span>
            </button>
            <div className="faq-a" id={`faq-a-${i}`} role="region">
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
