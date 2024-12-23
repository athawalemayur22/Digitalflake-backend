const Joi = require('joi');

exports.signUpValidation = (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(100).required(),
    });

    const {error} = schema.validate(req.body);
    if(error) {
        return res.status(400)
        .json({message: "Bad Request", error})
    }
    next();
}

exports.stateValidation = (req, res, next) => {
  const STATUS_ENUM = ["Active", "Inactive"];
  const schema = Joi.object({
    state_name: Joi.string().required(),
    state_code: Joi.string().required(),
    status: Joi.string()
      .valid(...STATUS_ENUM)
      .required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }
  next();
};

exports.cityValidation = (req, res, next) => {
  const STATUS_ENUM = ["Active", "Inactive"];
  const schema = Joi.object({
    city_name: Joi.string().required(),
    city_code: Joi.string().required(),
    state_id: Joi.string().required(),
    status: Joi.string()
      .valid(...STATUS_ENUM)
      .required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }
  next();
};

exports.warehouseValidation = (req, res, next) => {
  const STATUS_ENUM = ["Active", "Inactive"];
  const schema = Joi.object({
    warehouse_name: Joi.string().required(),
    city_id: Joi.string().required(),
    state_id: Joi.string().required(),
    status: Joi.string()
      .valid(...STATUS_ENUM)
      .required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }
  next();
};