import "../Options/Options.module.css";
export default function Options({ onUpdate, totalFeedback }) {
  return (
    <>
      <button
        onClick={() => {
          onUpdate("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          onUpdate("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onUpdate("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback ? (
        <button type="button" onClick={() => onUpdate("reset")}>
          Reset
        </button>
      ) : (
        ""
      )}
    </>
  );
}
