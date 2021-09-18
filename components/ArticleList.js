import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article) => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    )
}

/*Props way
const ArticleList = (props) => {
    return (
        <div className={articleStyles.grid}>
            {props.articles.map((articles) => (
                <h3>{articles.title}</h3>
            ))}
        </div>
    )
}
*/

export default ArticleList