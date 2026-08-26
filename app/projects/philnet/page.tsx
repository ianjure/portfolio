import Image from 'next/image';

export default function PhiLNetPage() {
  return (
    <div className="px-5 py-5">
      <div className="relative mb-5 aspect-[1600/980] w-full overflow-hidden rounded-[16px]">
        <Image
          src="/images/philnet-merge.png"
          alt="PhiLNet"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 900px"
        />
      </div>

      <h1 className="text-xl font-semibold text-gray-500">
        PhiLNet protect users from phishing websites through fast, accurate, and
        robust detection via a browser extension.
      </h1>

      <p className="mt-4 mb-10 text-justify text-gray-500">
        I built PhiLNet (Phishing Lightweight Network), an AI-powered phishing
        detection system that combines textual analysis with website heuristic
        features for real-time browser protection. Designed and optimized a
        hybrid AI pipeline that achieved 96.66% accuracy and 0.9943 ROC-AUC with
        an average end-to-end inference latency of under 1.5 seconds. Deployed
        the system as a FastAPI web service with a browser extension prototype
        and received the department’s Technical Excellence Award.
      </p>
    </div>
  );
}
