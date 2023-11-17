function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  console.log(index);

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={
          index === 1 && answer === null
            ? 0
            : -1 + (index + Number(answer !== null))
        }
      />
      <p>
        Question <strong>{index}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;

// index + Number(answer !== null)
