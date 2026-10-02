"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { Panel } from "./workspace-primitives";

export function formatAmount(cents: number, currency = "USD") { return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(cents / 100); }

export function PaymentScenario() {
  const [recipient, setRecipient] = useState("Example workspace");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [review, setReview] = useState<{ recipient: string; cents: number; currency: string } | null>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validFormat = /^\d{1,7}(\.\d{1,2})?$/.test(amount.trim());
    const cents = Math.round(Number(amount) * 100);
    if (!validFormat || !Number.isSafeInteger(cents) || cents <= 0 || cents > 100000000) { setError("Enter an amount from 0.01 to 1,000,000 with up to two decimal places."); return; }
    setError(""); setReview({ recipient, cents, currency });
  }
  return <div className="command-columns payment-flow"><Panel title={review ? "Scenario review" : "Explore a payment intent"} eyebrow="INTERFACE WALKTHROUGH">{review ? <div className="scenario-review" role="status"><span className="scenario-success"><Check size={22} /></span><span className="eyebrow gold-label">SCENARIO REVIEWED · NOT SUBMITTED</span><strong className="scenario-amount font-mono">{formatAmount(review.cents, review.currency)}</strong><p>To {review.recipient}</p><dl className="detail-facts"><div><dt>Currency</dt><dd>{review.currency}</dd></div><div><dt>Processor</dt><dd>Not connected</dd></div><div><dt>Payment created</dt><dd>No</dd></div></dl><p className="inspector-boundary">This is a visual review only. Nothing was sent, charged, or saved. Fees and settlement cannot be quoted without a connected provider.</p><button className="button button-secondary" onClick={() => setReview(null)}><RotateCcw size={14} />Edit scenario</button></div> : <form className="scenario-form" onSubmit={submit} noValidate><p className="panel-description">Use fictional recipients to explore the review step. Do not enter real payment or account details.</p><label>Example recipient<select value={recipient} onChange={e => setRecipient(e.target.value)}><option>Example workspace</option><option>Example supplier</option><option>Example project</option></select></label><div className="form-pair"><label>Example amount<input value={amount} onChange={e => { setAmount(e.target.value); setError(""); }} placeholder="0.00" inputMode="decimal" maxLength={12} aria-invalid={Boolean(error)} aria-describedby={error ? "amount-error" : "scenario-limit"} /></label><label>Currency<select value={currency} onChange={e => setCurrency(e.target.value)}><option>USD</option><option>EUR</option><option>GBP</option></select></label></div>{error ? <p id="amount-error" className="form-error" role="alert">{error}</p> : <p id="scenario-limit" className="form-hint">Illustrative amounts only. No payment instrument is collected.</p>}<button className="button button-primary" type="submit">Review scenario<ArrowRight size={15} /></button></form>}</Panel><Panel title="From intent to outcome" eyebrow="PROPOSED PAYMENT LIFECYCLE"><ol className="flow-steps">{[{ title: "Compose", detail: "Choose a recipient, amount, and currency.", state: "PREVIEW" }, { title: "Review", detail: "Confirm the intent before any financial action.", state: "PREVIEW" }, { title: "Process", detail: "A provider handles authorization and processing.", state: "NOT CONNECTED" }, { title: "Reconcile", detail: "Verified events establish the final recorded state.", state: "PLANNED" }].map((step, i) => <li key={step.title}><span className="flow-step-number font-mono">0{i + 1}</span><div><strong>{step.title}</strong><p>{step.detail}</p><span className={`status-tag ${i < 2 ? "status-gold" : ""}`}>{step.state}</span></div></li>)}</ol></Panel></div>;
}
