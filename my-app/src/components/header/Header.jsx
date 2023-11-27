import './_header.scss';
import MainMenu from './mainMenu/MainMenu';
import TopHeader from './topHeader/topHeader';
const linksItems = {
  class: 'main-menu',
  links: [
      {
        name: 'HOME',
        path: '/',
      },
      {
        name: 'All NEWS',
        path: '/allnews',
      },
      {
        name: 'BUSINESS',
        path: '/business',
      },
      {
        name: 'ENTERTAINMENT',
        path: '/entertainment',
      },
    ]
}

function Header () {
  return (
    <header>
    <TopHeader />
    <MainMenu links={linksItems.links} class={linksItems.class} />
  </header>
  )
}
export default Header;