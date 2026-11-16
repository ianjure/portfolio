import Image from 'next/image';

export default function BlueShiftPage() {
  return (
    <div className="px-5 py-5">
      <div className="relative mb-5 aspect-[1600/980] w-full overflow-hidden rounded-[16px]">
        <Image
          src="/images/blueshift-merge.png"
          alt="BlueShift"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 900px"
        />
      </div>

      <h1 className="text-xl font-semibold text-[#0C0C0D]">
        BlueShift analyzes how changing ocean conditions affect Philippine
        fisheries using satellite data.
      </h1>

      <p className="mt-4 mb-10 text-justify text-gray-500">
        I handled data collection, integration, wrangling, and preprocessing,
        combining NASA Aqua MODIS satellite observations (chlorophyll-a
        concentration and sea surface temperature) with Philippine Statistics
        Authority fisheries data. Prepared and cleaned datasets to support the
        analysis of ocean conditions and their relationship with Philippine
        fisheries production for the NASA Space Apps Challenge 2026.
      </p>
    </div>
  );
}
