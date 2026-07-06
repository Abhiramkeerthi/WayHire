import "../styles/ats.css";

const data = [
  {
    title: "Formatting",
    score: 92,
  },
  {
    title: "Keywords",
    score: 84,
  },
  {
    title: "Projects",
    score: 91,
  },
  {
    title: "Skills",
    score: 76,
  },
  {
    title: "Experience",
    score: 82,
  },
];

function ATSBreakdown() {
  return (
    <div className="breakdown-card">

      <h2>Resume Analysis Breakdown</h2>

      {data.map((item) => (

        <div
          className="breakdown-row"
          key={item.title}
        >

          <div className="breakdown-top">

            <span>{item.title}</span>

            <span>{item.score}%</span>

          </div>

          <div className="progress-track">

            <div
              className="progress-value"
              style={{
                width: `${item.score}%`,
              }}
            />

          </div>

        </div>

      ))}

    </div>
  );
}

export default ATSBreakdown;