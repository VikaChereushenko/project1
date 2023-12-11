import { Link } from 'react-router-dom';

function TopHeader () {
  return (
  <div className='topHeader'>
    <div className="logo">
      <Link to="/" className="logoHome">
       <svg role="img" itemProp="logo" width="90px" height="100%" preserveAspectRatio="xMinYMin meet" viewBox="0 0 98 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path fill="#e90606"d="M3 2.36h23.67v5.4h-.43l.05-3.46h-9.35v24.36h2.7v.8H10.4v-.8h2.5V4.3H3.45v3.46H3v-5.4zM27.8 2.36h9.3v.75h-2.65v25.56h2.64v.8h-9.3v-.8h2.7V3.1h-2.7v-.74zM45.3 2.3h1.78l8.7 20.9 8.64-20.9h1.73L71 28.66h2.44v.8h-9.6v-.8h2.47l-3-16.85-7.68 17.67h-1.8l-7.6-17.66-3.2 16.86h2.33l-.05.8h-7.07l.05-.8h2.16L45.3 2.3zM74.25 2.36h20.47l.05 5.35h-.37l-.17-3.3-13.4-.15v10.7h11.4l.27-2.5h.5c-.12 2.28-.12 4.5 0 6.76h-.5l-.27-2.58h-11.4V27.7h13.9l.04-3.68h.38v5.45h-20.9v-.76l2.7-.04V3.16l-2.7-.05v-.74z"></path>
        </svg>
      </Link>
      </div>
      <div className="actions">
        <button type="button" className="signIn">sign in</button>
        <Link to="/subscribe/form"className='subscribe'>subscribe</Link>
      </div>
    <div/>
  </div>
  )
}

export default TopHeader;