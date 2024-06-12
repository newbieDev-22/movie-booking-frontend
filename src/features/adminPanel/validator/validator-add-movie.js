import Joi from "joi";
import validateWrapper from "../../../utils/validate-wrapper";

const addMovieSchema = Joi.object({
  movieName: Joi.string().required().messages({
    "string.empty": `Movie name is required.`,
  }),
  movieSynopsis: Joi.string().allow(""),
  genreId1: Joi.number().allow(null),
  genreId2: Joi.number().allow(null),
  genreId3: Joi.number().allow(null),
  movieTrailerPath: Joi.string().allow(""),
  durationInMin: Joi.number().allow(null),
});

const validateAddMovie = (input) => validateWrapper(addMovieSchema, input);

export default validateAddMovie;
