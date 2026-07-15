"use client";

import { useEffect } from "react";
import { thankYouCopy } from "@/lib/submit-interest";

type ThankYouModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ThankYouModal({ open, onClose }: ThankYouModalProps) {
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="thankyou-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="thankyou-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="thankyou-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="thankyou-title">{thankYouCopy.title}</h2>
        <p>{thankYouCopy.body}</p>
        <button className="btn btn-primary" type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
