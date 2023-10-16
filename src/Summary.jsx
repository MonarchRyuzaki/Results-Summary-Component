import Button from "./Button";
import Details from "./Details";
import "./Summary.css"

export default function Summary() {
  const dir = "src/assets/images/icon-";
  return (
    <section className="summary">
      <h3>Summary</h3>
      <Details
        src={dir + "reaction.svg"}
        text="Reaction"
        color="hsl(0, 100%, 67%)"
        bg="hsl(0, 100%, 67%, 0.1)"
        score={80}
      />
      <Details
        src={dir + "memory.svg"}
        text="Memory"
        color="hsl(39, 100%, 56%)"
        bg="hsl(39, 100%, 56%, 0.1)"
        score={92}
      />
      <Details
        src={dir + "verbal.svg"}
        text="Verbal"
        color="hsl(166, 100%, 37%)"
        bg="hsl(166, 100%, 37%, 0.1)"
        score={61}
      />
      <Details
        src={dir + "visual.svg"}
        text="Visual"
        color="hsla(256, 72%, 46%, 1)"
        bg="hsla(256, 72%, 46%, 0.1)"
        score={80}
      />
      <Button />
    </section>
  );
}
