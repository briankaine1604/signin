import Provider from '@components/provider'
import '@styles/global.css'

const RootLayout = ({children}) => {
  return (
    <html>
          <body>
      <Provider>
       
       {children}
      
      </Provider>
      </body>
    </html>
  )
}

export default RootLayout