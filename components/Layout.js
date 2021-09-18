import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children} 
                {/* {children} corresponds to line 9 in _app.js. so it shows all components under header */}
                </main>
        </div>
        </>
    )
}

export default Layout