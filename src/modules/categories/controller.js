import model from "./model.js";

const GET = async (req, res) => {
  try {
    let categories = await model.GET(req.params);
    res.send(categories);
  } catch (error) {
    console.log(error.message);
  }
};

const POST = async (req, res) => {
  try {
    let category = await model.POST(req.body);
    res.status(201).json({
      status: 201,
      message: "New category created",
      data: category,
    });
  } catch (error) {
    console.log(error);
  }
};

const PUT = async (req, res) => {
  try {
    let category = await model.PUT(req.params, req.body);
    res.status(200).json({
      status: 200,
      message: "category_name changed successfully",
      data: category,
    });
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async (req, res) => {
  try {
    let category = await model.DELETE(req.params);
    res.status(200).json({
      status: 200,
      message: "category deleted successfully",
      data: category,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST, PUT, DELETE };
