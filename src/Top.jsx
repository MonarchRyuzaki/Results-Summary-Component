import "./Top.css";

export default function Top() {
  return (
    <section className="result-component">
      <h2 className="your-result">Your Result</h2>
      <div className="marks">
        <div className="wrapper">
          <div className="i-got">76</div>
          <div className="out-of">of 100</div>
        </div>
      </div>
      <div className="grade">Great</div>
      <div className="comparison">
        You scored higher than 65 % of people who have taken these tests
      </div>
    </section>
  );
}
