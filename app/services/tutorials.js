/* eslint-disable no-undef */
const BadRequestError = require("../errors/bad-request");
const NotFoundError = require("../errors/not-found");
const db = require("../models");
const Tutorial = db.tutorials

const createTutorials = async (req) => {
    const { title, description, published } = req.body;

    if (!title || !description) {
        throw new BadRequestError('Title and description are required');
    }

    // create a new tutorial
    const tutorial = new Tutorial({
        title,
        description,
        published: published ? published : false
    });

    // save tutorial in the database
    try {
        const savedTutorial = await tutorial.save();
        return savedTutorial;
    } catch (err) {
        throw new Error('Some error occurred while creating the tutorial');
    }
};

const updateTutorial = async (req) => {
  if (!req.body || Object.keys(req.body).length === 0){
    throw new BadRequestError("Data to update can not be empty!");
  }

  const id = req.params.id;
  try {
    const updatedTutorial = await Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false });

    if (!updatedTutorial) {
        throw new BadRequestError(`Cannot update tutorial with id=${id}. Tutorial not found`);
    }

    return updatedTutorial;
  } catch (err) {
    throw new Error(`Error updating tutorial with id=${id}: ${err.message}`);
  }
}

const getAllTutorials = async (req) => {
    try {
      const data = await Tutorial.find({});
      return data;
    } catch (err) {
      throw new Error(err.message || "Some error occurred while retrieving tutorials");
    }
}

const getTutorialsById = async (req) => {
    const id = req.params.id;

    try {
      const data = await Tutorial.findById(id);

      if(!data) {
        throw new NotFoundError(`Cannot find Tutorial with id ${id}`);
      }
      return data;
    } catch (error) {
      return error
    }
}

const deleteTutorial = async (req) => {
    const id = req.params.id;

    try {
      const data = await Tutorial.findByIdAndRemove(id);

      console.log(data)

      if(data == null) {
        throw new NotFoundError(`Cannot delete Tutorial with id=${id}. Tutorial not found`);
      }

      return data;
    } catch (err) {
      return err
    }
}


module.exports = { createTutorials, getAllTutorials, getTutorialsById, updateTutorial, deleteTutorial };