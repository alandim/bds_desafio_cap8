import './styles.css';

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <div className="result-search-container">
      <h3 className="result-seach-title">{title}</h3>
      <p className="result-search-description">{description}</p>
    </div>
  );
};
export default ResultCard;
