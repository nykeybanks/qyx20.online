import { QYXEmblem } from "@/components/brand";

export function CoreDiagram() {
  return (
    <div className="core-diagram" role="img" aria-label="Conceptual ecosystem diagram: QYX20 at the center of QYXos, QYXai, QYXpay, and QYX.app. These services are not connected.">
      <div className="diagram-coordinate diagram-coordinate-top">QYX / SYSTEM ARCHITECTURE</div>
      <svg className="diagram-lines" viewBox="0 0 480 320" fill="none" aria-hidden="true">
        <path d="M240 12V308M20 160H460" stroke="currentColor" strokeOpacity="0.09" strokeDasharray="3 6" />
        <circle cx="240" cy="160" r="136" stroke="currentColor" strokeOpacity="0.1" />
        <circle cx="240" cy="160" r="112" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="2 7" />
        <circle cx="240" cy="160" r="78" stroke="currentColor" strokeOpacity="0.12" />
        <path d="M240 24A136 136 0 0 1 376 160M104 160A136 136 0 0 0 240 296" stroke="var(--accent)" strokeOpacity="0.5" />
        <path d="M144 64L204 124M276 124L336 64M144 256L204 196M276 196L336 256" stroke="var(--accent)" strokeOpacity="0.3" />
        <circle cx="240" cy="24" r="3" fill="var(--accent)" /><circle cx="376" cy="160" r="3" fill="var(--accent)" /><circle cx="240" cy="296" r="3" fill="var(--accent)" /><circle cx="104" cy="160" r="3" fill="var(--accent)" />
        <path d="M20 34V20H34M446 20H460V34M20 286V300H34M446 300H460V286" stroke="currentColor" strokeOpacity="0.3" />
      </svg>
      <div className="diagram-core" aria-hidden="true"><QYXEmblem size={62} alt="" /><span>QYX20</span><small>CORE WORKSPACE</small></div>
      <div className="diagram-node node-os" aria-hidden="true"><span className="node-square" />QYXos<span className="node-caption">FOUNDATION</span></div>
      <div className="diagram-node node-ai" aria-hidden="true"><span className="node-square" />QYXai<span className="node-caption">INTELLIGENCE</span></div>
      <div className="diagram-node node-pay" aria-hidden="true"><span className="node-square" />QYXpay<span className="node-caption">VALUE</span></div>
      <div className="diagram-node node-app" aria-hidden="true"><span className="node-square" />QYX.app<span className="node-caption">ACCESS</span></div>
      <div className="diagram-coordinate diagram-coordinate-bottom"><span className="tiny-cross">+</span> CONCEPTUAL TOPOLOGY <span className="tiny-cross">+</span></div>
    </div>
  );
}
