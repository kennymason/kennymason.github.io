// Timeline.jsx
// Timeline view for education or experience

import './Timeline.css';

export default function Timeline({ data }){
  
  // Sort in reverse chronological order
  const sortedData = (() => {
    data.sort((a, b) => b.id - a.id);
    return data;
  })();

  return(
    <div className="timeline">
      <div className='timeline-line'></div>
      <div className='timeline-dot'></div>

      {sortedData.map((entry, i) => {
        {/* if (i % 2 === 0) {
          return (<Degree key={i} className="timeline-item left" data={entry}/>);
        } */}
        {/* return(<Degree key={i} className="timeline-item right" data={entry}/>); */}
        return(
          <div key={i} className={`timeline-item ${ i % 2 === 0 ? "left" : "right" }`}>
            <div className='date'>{entry.dates[1].getFullYear()}</div>
            {/* <img src={entry.image} className='school-icon'/> */}
            <div className='timeline-content'>
              <div className='degree-type'>
                {entry.degree}{entry.withHonors ? " with Honors" : ""}
              </div>
              <div className='major'>{entry.major}</div>
              <div>{entry.school}, {entry.location}</div>
              { entry.status !== "Complete" && <div style={{color: "#ffdd44ff"}}>{entry.status}</div> }
              { entry.gpa >= 3.5 && <div>{entry.gpa} GPA</div> }
              { entry.honors.length !== 0 &&
                <ul className='honors'>{entry.honors.map((honor, j) => <li key={j}>{honor}</li>)}</ul>
              }
            </div>
          </div>
        )
      })}
    </div>
  );
}
