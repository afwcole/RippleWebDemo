export default function ProblemBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
<div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
<div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
    <div className="py-12 md:py-20">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{"What's the problem?"}</h2>
            <p className="text-xl text-gray-600">CBDCs and Crypto-based solutions inherently rely on internet connectivity. This is a problem for billions globally that lack internet access or smartphones. How do we bridge this digital divide to ensure everyone benefits from the CBDC financial revolution?</p>
        </div>

        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border border-gray-900">
                <h1 className="text-blue-600 text-6xl font-extrabold leading-tighter tracking-tighter mb-4">1.4B</h1>
                <h4 className="text-xl font-bold leading-snug tracking-tight text-center mb-1">Unbanked Adults <br />Globally</h4>
                <p className="text-gray-600 text-center">An enormous populace remains outside the banking infrastructure, detached from modern financial advantages.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border border-gray-900">
                <h1 className="text-blue-600 text-6xl font-extrabold leading-tighter tracking-tighter mb-4">3.2B</h1>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Individuals without <br /> Internet Access</h4>
                <p className="text-gray-600 text-center">The digital divide keeps billions in the dark, unable to leverage the power of CBDCs and crypto solutions.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border border-gray-900">
                <h1 className="text-blue-600 text-6xl font-extrabold leading-tighter tracking-tighter mb-4">94%</h1>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">of Unconnected People Live in Low & Middle Income Countries</h4>
                <p className="text-gray-600 text-center">LMICs are the most disconnected, hence the most prone to being financially excluded in the CBDC revolution.</p>
            </div>
        </div>

    </div>
</div>

    </section>
  )
}