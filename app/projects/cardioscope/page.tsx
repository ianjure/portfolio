import Image from 'next/image';

export default function CardioScopePage() {
  return (
    <div className="px-5 py-5 mb-5">
      <div className="relative mb-5 aspect-[1600/980] w-full overflow-hidden rounded-[16px]">
        <Image
          src="/images/cardioscope-merge.png"
          alt="CardioScope"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 900px"
        />
      </div>

      <h1 className="text-xl font-semibold text-[#0C0C0D]">
        CardioScope supports accessible cardiac screening by detecting
        abnormalities from phonocardiogram recordings.
      </h1>

      <p className="mt-4 mb-10 text-justify text-gray-500">
        I trained and improved a deep learning model for non-invasive cardiac
        sound classification using phonocardiogram data across normal and
        valvular heart conditions. Experimented with a Temporal Convolutional
        Network–Spiking Neural Network (TCN-SNN) architecture to capture
        temporal patterns in cardiac sounds while supporting efficient inference
        on a mobile device. Iteratively refined model performance through
        training and validation, contributing to a reported 96.88% controlled
        accuracy and Best Project of the Year recognition at the BPI-DOST
        Innovation Awards 2025.
      </p>

      <div className="flex items-center justify-center gap-8">
        <Image
          src="/logos/bpi-logo.svg"
          alt="BPI Logo"
          width={200}
          height={100}
          className="h-12 w-auto object-contain"
        />

        <Image
          src="/logos/dost-logo.svg"
          alt="DOST Logo"
          width={200}
          height={100}
          className="h-12 w-auto object-contain"
        />
      </div>
    </div>
  );
}
