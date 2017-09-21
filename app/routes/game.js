import Game from '../models/game'

const getGames = (req, res) => {
    console.log('Getting games..')
    Game.find(null, null, { sort: { postDate: 1 }}, (err, games) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.json(games)
    })
}

const getGame = (req, res) => {
    const { id } = req.params

    Game.findById(id, (err, game) => {
        if (err) {
            return res.status(500).json(err)
        }
        res.json(game)
    })
}

const postGame = (req, res) => {
    let game = Object.assign(new Game() , req.body)

    game.save(err => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(204).json({ message: 'game created' })
    })
}

const deleteGame = (req, res) => {
    Game.remove({_id: req.params.id}, err => {
        if (err) {
            return
        }
        res.status(204).json({ message: 'game deleted' })
    })
}

export { getGames, getGame, postGame, deleteGame }