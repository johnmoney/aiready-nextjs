interface CardProps {
  title: string;
  content: string;
  icon?: string;           // e.g. "fa-compass", "fa-users", "fa-rocket"
  style?: 'solid' | 'regular' | 'brands';  // default 'solid'
}

export default function Card({
  title,
  content,
  icon = 'fa-compass',
  style = 'solid',
}: CardProps) {
  const iconClass = `fa-${style} ${icon}`;

  return (
    <div className="rounded-lg border border-light-border bg-white p-6 shadow-sm">
      <div className="text-center">
        <i className={`${iconClass} text-6xl text-primary`} aria-hidden="true" />
      </div>
      <h3 className="mt-3 font-heading text-lg font-semibold text-dark-text">
        {title}
      </h3>
      <p className="mt-2 text-gray-text">{content}</p>
    </div>
  );
}