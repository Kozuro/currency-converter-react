import "./style.css";

export const Result = ({ result }) => (
    <div className="result">
        <p className="result__paragraph">
            Wynik:&nbsp;
            {result !== "" && (
                <>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                    <strong>{result.targetAmount.toFixed(2)}&nbsp;{result.currency}</strong>
                </>
            )}
        </p>
    </div>
)