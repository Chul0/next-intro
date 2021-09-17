import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}> 
                <span>WebDeb</span> News
            </h1>
            <p className={headerStyles.description}>Keep up to date with the latest web deb news</p>


                {/* Styled-JSX is a very lightweight library (only 3kb) built and maintained by Next.JS. In the last couple of years, it has grown massively in popularity. 
                    <style jsx>
                        {`
                            .title {
                                color: red;
                            }
                        `}
                    </style>
                ${x > 6 ? 'red' : 'blue'} -> conditional style*/}
        </div>
    )
}

export default Header