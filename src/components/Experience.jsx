// Experience.jsx
// Work History, Roles, and Technical Experience

import './Experience.css';

export default function Experience({ data }){
  // Sort in reverse chronological order
  const sortedData = (() => {
    data.sort((a, b) => b.id - a.id);
    return data;
  })();

  return (
    <div className='roles-container'>
      {sortedData.map((role, i) => (
        <div
          id={role.id}
          key={i}
          className="role-wrapper"
        >
          <div className='role-dates'>
            { 
              role.dates[0].getFullYear() === role.dates[1].getFullYear() ?
              role.dates[0].getFullYear() :
              `${ role.dates[0].getFullYear() } – ${ role.dates[1].getFullYear() }`
            }
          </div>

          <div className='role-card-border-wrap'>
            <div className='role-card'>
              <div className='role-header'>
                <img className="company-image" src={ role.image }/>
                <div className='role-header-titles'>
                  <div className='role-title'><span className='text-highlight'>{ role.title }</span> — { role.company }</div>
                  <div className='role-location'>{ role.location }</div>
                </div>
              </div>
              <ul className='bullets'>{role.bullets.map((bullet, j) => <li key={j}>{bullet}</li>)}</ul>
              <div className='role-tags'>{role.tags.map((tag, j) => <div key={j} className='role-tag'>{tag}</div>)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
