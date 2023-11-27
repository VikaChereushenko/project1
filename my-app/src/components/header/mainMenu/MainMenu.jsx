import { NavLink } from "react-router-dom";

function MainMenu(props) {
  const items = props.links.map((item, index) => {
    return (
      <li key={index}>
      <NavLink to={item.path}>{item.name}</NavLink>
      </li>
    )
    });
    return (
    <div className="mainMenu">
    <nav className="navigation">
      <ul>
        {items}
      </ul> 
    </nav>
    {/*<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" role="img" aria-hidden="true" tabIndex="-1">*/}
    {/*  <path fill="#685F55" d="M14.1 14.751a5.53 5.53 0 1 1 .651-.651L19 18.348l-.652.652-4.248-4.249zm-3.557.4a4.608 4.608 0 1 0 0-9.216 4.608 4.608 0 0 0 0 9.215z"></path>*/}
    {/*</svg>*/}
    </div>
    )
}
MainMenu.defaultProps = {
    class: 'nav',
    links: [
      {
        link: 'defaultLink',
        path: '/',
      },
    ]
}
export default MainMenu;
