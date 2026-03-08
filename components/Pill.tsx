interface PillProps {
  title: string;
  icon?: string;           // e.g. "fa-compass", "fa-users", "fa-rocket"
  style?: 'solid' | 'regular' | 'brands';  // default 'solid'
  bg?: string;      // e.g. "accent3-color", "primary", "success" → becomes var(--accent3-color)
}

export default function Pill({
  title,
  icon = 'fa-chart-line',
  style = 'solid',
  bg = 'accent3-color',  // default to your original
}: PillProps) {
  const iconClass = `fa-${style} ${icon}`;
  const bgClass = bg ? `bg-${bg}` : 'bg-gray-500'; // fallback

  return (
        <div
          className={`inline-block ${bgClass} text-white px-4 py-2 rounded-full font-[var(--font-family-body)] font-semibold text-sm mb-6`}
        >
          <i className={`${iconClass} mr-2`} aria-hidden="true" />{title}
        </div>
  );
}