import { useCountUp } from '../hooks/useCountUp';

function StatCard({ item }) {
  const [ref, count] = useCountUp(item.number || 0);

  return (
    <div ref={ref} className="glass about__card">
      <span className="about__card-label">{item.label}</span>
      <span className="about__card-value gradient-text">
        {item.number !== null ? `${count}${item.suffix || ''}` : item.value}
      </span>
      <span className="about__card-detail">{item.detail}</span>
    </div>
  );
}

export default StatCard;