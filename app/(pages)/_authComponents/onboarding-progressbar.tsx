type ProgressBarProps = {
  currentStepIndex: number;
  stepsLength: number;
};
export default function ProgressBar({
  currentStepIndex,
  stepsLength,
}: ProgressBarProps) {
  return (
    <div className="progress-bar">
      {Array.from({ length: stepsLength }).map((_, index) => (
        <div
          key={index}
          className={`step ${index <= currentStepIndex ? "completed" : ""}`}
        >
          {index <= currentStepIndex ? "✔" : index + 1}
        </div>
      ))}
    </div>
  );
}
