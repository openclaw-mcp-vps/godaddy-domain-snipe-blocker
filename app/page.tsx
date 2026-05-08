export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Domain Privacy Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Registrars From{' '}
          <span className="text-[#58a6ff]">Front-Running</span>{' '}
          Your Domains
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          DomainShield proxies your availability searches through multiple registrars simultaneously — so no single registrar can track your intent and snipe the domain before you register it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Protected — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { step: '01', title: 'Enter Domains', desc: 'Paste a list of domains you want to check availability for.' },
            { step: '02', title: 'Parallel Proxy Search', desc: 'We fan out queries across multiple registrar APIs simultaneously.' },
            { step: '03', title: 'Aggregated Results', desc: 'Get clean availability results with no single registrar seeing your full intent.' },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] text-xs font-bold mb-2">{item.step}</div>
              <div className="text-white font-semibold mb-1">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited domain searches',
              'Parallel multi-registrar proxy',
              'Search history & export',
              'No search data sold or shared',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Protecting Searches
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is registrar front-running actually real?',
              a: 'Yes. Multiple investigations have documented registrars registering domains shortly after users searched for them. While hard to prove definitively, the pattern is well-documented in the domain investor community and has led to FTC complaints.',
            },
            {
              q: 'How does proxying through multiple registrars help?',
              a: 'By splitting and rotating queries across registrars, no single registrar sees your full search pattern. This makes it statistically much harder for any one registrar to identify high-value targets from your searches.',
            },
            {
              q: 'Do you store my domain searches?',
              a: 'Search history is stored only in your account for your own reference and export. We never sell, share, or analyze your search data for any commercial purpose.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} DomainShield. All rights reserved.
      </footer>
    </main>
  )
}
