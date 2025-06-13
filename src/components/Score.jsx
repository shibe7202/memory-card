function Score({ points, bestPoints }) {
    return (
        <>
            <p className="score">Score: {points}</p>
            <p className="bestScore">Best score: {bestPoints}</p>
        </>
    )
}

export default Score