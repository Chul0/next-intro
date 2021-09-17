import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className='title'> 
                <span>WebDeb</span> News
            </h1>
            <style jsx>
                {`
                    .title {
                        color: red
                    }
                `}
            </style>
                {/* Styled-JSX is a very lightweight library (only 3kb) built and maintained by Next.JS. In the last couple of years, it has grown massively in popularity. */}
        </div>
    )
}

export default Header