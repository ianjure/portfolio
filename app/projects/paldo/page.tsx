import Image from 'next/image';

export default function PaldoPage() {
  return (
    <div className="px-5 py-5">
      <div className="relative mb-5 aspect-[1600/980] w-full overflow-hidden rounded-[16px]">
        <Image
          src="/images/paldo-merge.png"
          alt="Paldo"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 900px"
        />
      </div>

      <h1 className="text-xl font-semibold text-[#0C0C0D]">
        Paldo helps underserved MSMEs access suitable financing using
        alternative data beyond traditional credit history.
      </h1>

      <p className="mt-4 mb-10 text-justify text-gray-500">
        I conceptualized the data and AI workflow for Paldo, an
        alternative-credit fintech platform designed to help underserved MSMEs
        access suitable financing beyond traditional credit history. Designed
        the proposed Paldo Trust Index and loan-matching workflow using
        alternative data such as e-wallet activity, transaction history, utility
        bills, supply-chain relationships, and shopping activity to assess
        borrower credibility. Served as CTO, contributing to product ideation,
        technical architecture, and AI/system conceptualization while leading
        the technical direction of the concept that won 1st Place at the Young
        Banatao Learning Lab 2.0 Ideathon.
      </p>
    </div>
  );
}
