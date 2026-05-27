import ScrollReveal from './ScrollReveal';

const lines = [
  'the story of CRED',
  'begins with trust.',
  "we believe",
  'individuals',
  "who've proven",
  'their',
  'trustworthiness',
  'deserve better:',
  'better experiences,',
  'better rewards,',
  "better rules. this is",
  'the status quo',
  "we're building.",
  'make it to the',
  'club, and',
  'experience the',
  'ascension',
  'yourself.'
];

export default function UnderHeroReveal() {
  return (
    <section className="w-full bg-black text-white px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-white/50 mb-8">
          NOT EVERYONE MAKES IT IN.
        </p>

        <div className="grid gap-2 md:gap-3 font-denton text-[34px] sm:text-[48px] md:text-[64px] leading-[0.95] font-semibold tracking-tight">
          {lines.map((line, index) => (
            <ScrollReveal key={index} delay={index * 0.03}>
              {line}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
