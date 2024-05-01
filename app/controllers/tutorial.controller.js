/* eslint-disable no-undef */
const db = require("../models")
const {StatusCodes} = require("http-status-codes");
const { createTutorials, getAllTutorials, getTutorialsById, updateTutorial, deleteTutorial } = require("../services/tutorials");
const BadRequestError = require("../errors/bad-request");
const Tutorial = db.tutorials

// create and save a new tutorial
const create = async (req, res, next) => {
    try {
        const data = await createTutorials(req);
        res.status(StatusCodes.OK).send({
            status: StatusCodes.OK,
            msg: "Tutorials created successfully!",
            data: data,
        });
    } catch (error) {
        if (error instanceof BadRequestError) {
            // Handle BadRequestError
            res.status(StatusCodes.BAD_REQUEST).send({
                status: StatusCodes.BAD_REQUEST,
                msg: error.message,
            });
        } else {
            // Handle other errors
            next(error);
        }
    }
};

// update a tutorial by the id in the request
const updateTutorialItem = async (req, res, next) => {
     try {
        const data = await updateTutorial(req);
        res.status(StatusCodes.OK).send({
            status: StatusCodes.OK,
            msg: "OK",
            data: data,
        });
    } catch (error) {
        if (error instanceof BadRequestError) {
            // Handle BadRequestError
            res.status(StatusCodes.BAD_REQUEST).send({
                status: StatusCodes.BAD_REQUEST,
                msg: error.message,
            });
        } else {
            // Handle other errors
            next(error);
        }
    }
};


// retrieve all tutorials from the database
const findAllTutorials = async (req, res, next) => {
     try {
        const data = await getAllTutorials(req);
        res.status(StatusCodes.OK).send({
            status: StatusCodes.OK,
            msg: "OK",
            data: data,
        });
    } catch (error) {
        if (error instanceof BadRequestError) {
            // Handle BadRequestError
            res.status(StatusCodes.BAD_REQUEST).send({
                status: StatusCodes.BAD_REQUEST,
                msg: error.message,
            });
        } else {
            // Handle other errors
            next(error);
        }
    }
   
};

// find a single Tutorial with an ID
const findTutorialsById = async (req, res, next) => {
    try {
        const data = await getTutorialsById(req);
        res.status(StatusCodes.OK).json({
            status: StatusCodes.OK,
            msg: "OK",
            data: data,
        });
    } catch (err) {
        next(err);
    }
};

const deleteTutorialById = async (req, res, next) => {
    try {
        const data = await deleteTutorial(req);
        res.status(StatusCodes.OK).send({
            status: StatusCodes.OK,
            msg: "OK",
            data: data,
        });
    } catch (error) {
        next(error);
    }
};

// find all published tutorials
const findAllPublished = (req,res) => {
    Tutorial.find({published: true})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving tutorials"
            })
        })
}

module.exports = {
    create,
    findAllTutorials,
    findTutorialsById,
    updateTutorialItem,
    deleteTutorialById,
    findAllPublished
}