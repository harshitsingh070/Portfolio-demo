export default function SectionTitle({ num, title }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-14">
      <span className="section-number">{num}.</span>
      <h2
        className="text-gradient"
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(1.55rem, 6.4vw, 2.7rem)',
          letterSpacing: '-0.02em',
          lineHeight: 1.02,
        }}
      >
        {title}
        <span style={{ WebkitTextFillColor: 'var(--primary)', color: 'var(--primary)' }}>()</span>
      </h2>
      <div className="section-line hidden sm:block" />
    </div>
  )
}
