import "./Details.css"

export default function Details({ src, text, score, color, bg }) {
  return (
    <div className="comp" style={{backgroundColor: bg}}>
      <img src={src} alt="" />
      <div className="topic" style={{color: color}}>{text}</div>
      <div className="number">
        {score} <span className="by-100">/ 100</span>
      </div>
    </div>
  );
}
