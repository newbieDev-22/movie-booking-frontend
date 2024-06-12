import Joi from "joi";
import validateWrapper from "../../../utils/validate-wrapper";

const updateMovieSchema = Joi.object({
  movieName: Joi.string(),
  movieSynopsis: Joi.string().allow(null),
  genreId1: Joi.number().allow(null),
  genreId2: Joi.number().allow(null),
  genreId3: Joi.number().allow(null),
  movieTrailerPath: Joi.string().allow(null),
  durationInMin: Joi.number().allow(null),
});

const validateUpdateMovie = (input) => validateWrapper(updateMovieSchema, input);

export default validateUpdateMovie;
