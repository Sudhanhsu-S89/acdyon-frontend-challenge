# Design & Technical Decisions

## 1. Why this implementation over the obvious alternative?

**Coded product mockup instead of a screenshot or illustration.**
Most landing pages describe what the product does with marketing copy. I built the product interface directly in HTML and CSS — a dark-themed workflow editor with a sidebar, step cards, and a working "Run workflow" interaction. This immediately shows the product rather than telling, and demonstrates frontend ability at the same time.

**Single-font design system with CSS custom properties.**
I used Inter at four weights (400–700) with a strict spacing scale defined as CSS variables. The alternative was picking multiple typefaces and ad-hoc spacing, which tends to look inconsistent. A constrained system produces more cohesive results with less effort.

**Static site with zero dependencies.**
The obvious alternative was a framework (React, Vite, etc.). A static HTML/CSS/JS site loads instantly, has no build step, deploys anywhere, and keeps the code easy to audit. For a single marketing page, a framework adds complexity without benefit.

## 2. What trade-off did you make because of the time limit?

**Fewer sections, higher polish.**
I could have added pricing tables, feature comparison grids, or animated scroll reveals. Instead I focused on five sections (hero, product, benefits, how-it-works, CTA) and spent the time on typography, spacing, responsive behavior, and the product mockup. A recruiter scanning 20 submissions will notice visual quality faster than section count.

**No dark mode toggle.**
The assessment allows dark mode but requires it to be "properly implemented." Building a complete, tested dual-theme system within the time limit risked inconsistency. The product mockup itself uses a dark theme, which demonstrates that I can work with dark surfaces — without the risk of a half-finished toggle.

## 3. Where did you use AI tools and what did you personally verify?

I used AI assistance for initial code generation and copy drafting. Afterward, I personally verified:

- **Responsive behavior** at 390px, 768px, and 1440px — adjusting font sizes, product mockup layout (sidebar hides on mobile, workflow steps stack vertically), and button sizing.
- **Interaction logic** — tested the full run → complete → reset cycle, including edge cases like rapid clicking (prevented by the `isRunning` guard).
- **Visual hierarchy** — manually tuned letter-spacing, line-height, color contrast, and spacing between sections to match the editorial tone I wanted.
- **Copy** — rewrote AI-generated marketing language ("revolutionize," "unlock") into direct product language that describes what FlowPilot actually does.
- **Assessment compliance** — confirmed no fake testimonials, no fabricated statistics, no placeholder logos, and no horizontal scroll at mobile widths.
