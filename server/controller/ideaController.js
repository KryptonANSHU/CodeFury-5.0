// const { cookies } = require('../client/src/components/places.tsx');
const Idea = require('../models/IdeaModel')

exports.postIdeas = async (req, res) => {
    const idea = await Idea.create(req.body)

    res.status(201).json({
            success: true,
            idea
    });

}

exports.getIdeas = async (req,res)=>{
    const idea = await Idea.find({})

    res.status(200).json({
        success: true,
        idea
});
}
