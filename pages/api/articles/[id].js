import {articles} from '../../../data'

export default function handler({ query: { id }}, res) {
                                //destructure it like this because I only need to use 'id' here

    const filtered = articles.filter(article => article.id === id)
    //filter it by id and store it in an array

    if(filtered.length > 0 ) {
        res.status(200).json(filtered[0])
    }else {
        res.status(400).json({message: `Article with the id of ${id} is not found`})
    }
    
}