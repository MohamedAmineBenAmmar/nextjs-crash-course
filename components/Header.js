import headerStyles from '../styles/Header.module.css'

const Header = () => {
  // const x = 2
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      {/* <p className='test'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione cupiditate culpa expedita esse dolorem, id optio. Atque molestiae ut expedita possimus quae, temporibus quos doloremque, consectetur, ratione asperiores necessitatibus debitis?</p> */}
      {/* Styling the h1 within the component using jsx */}
      {/* <style jsx>
        {`
          .test {
            color: ${x == 2 ? 'green' : 'blue'} !important;
          }
        `}
      </style> */}
      <p className={headerStyles.description}>
        Keep up to date with the latest web dev news
      </p>
    </div>
  )
}

export default Header