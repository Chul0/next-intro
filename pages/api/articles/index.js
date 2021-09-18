import {articles} from '../../../data'

export default function handler(req, res) {
    res.status(200).json(articles)
    //200 means everything is good
}