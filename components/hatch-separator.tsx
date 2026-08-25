import React from 'react';

/**
 * HatchSeparator
 * A thin diagonal-hatch divider band, matching a subtle "under construction"
 * or section-break style seen in many editorial/dashboard UIs.
 *
 * Props:
 * - height: band height in px (default 28)
 * - angle: hatch line angle in degrees (default 45)
 * - lineColor: color of the diagonal lines (default Tailwind gray-300, '#d1d5db')
 * - spacing: distance between lines in px (default 9)
 * - lineWidth: thickness of each line in px (default 1)
 * - bgColor: background color behind the lines (default '#fafafa')
 * - borderColor: color of the surrounding hairline border (default Tailwind gray-300, '#d1d5db')
 * - className / style: passthrough for extra customization
 *
 * If you're using Tailwind, you can skip the color props entirely and just
 * apply `border-gray-300` via className, then pass lineColor="#d1d5db"
 * (Tailwind doesn't expose its palette to inline gradients, so the hex is
 * still needed for the hatch lines themselves).
 */
export default function HatchSeparator({
  height = 22,
  angle = -45,
  lineColor = '#d1d5db', // Tailwind gray-300
  spacing = 8,
  lineWidth = 1,
  bgColor = '#ffffff',
  className = '',
  style = {},
}) {
  return (
    <div
      className={`border-t border-b border-gray-300 ${className}`}
      style={{
        height,
        backgroundColor: bgColor,
        backgroundImage: `repeating-linear-gradient(
          ${angle}deg,
          ${lineColor} 0px,
          ${lineColor} ${lineWidth}px,
          transparent ${lineWidth}px,
          transparent ${spacing}px
        )`,
        ...style,
      }}
    />
  );
}

/* --- Demo usage --- */
export function HatchSeparatorDemo() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div
        style={{
          height: 80,
          background: '#fff',
          border: '1px solid #e5e5e5',
          borderBottom: 'none',
        }}
      />
      <HatchSeparator />
      <div
        style={{
          height: 80,
          background: '#fff',
          border: '1px solid #e5e5e5',
          borderTop: 'none',
        }}
      />
    </div>
  );
}
