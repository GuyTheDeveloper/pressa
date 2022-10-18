import model from "./model.js";

const GET = async (req, res) => {
  try {
    let subcategories = await model.GET(req.params);
    res.send(subcategories);
  } catch (error) {
    console.log(error);
  }
};

const POST = async (req, res) => {
  try {
    let subcategory = await model.POST(req.body);
    res.status(201).json({
      status: 201,
      message: "subcategory created",
      data: subcategory,
    });
  } catch (error) {
    console.log(error);
  }
};

const PUT = async (req, res) => {
  try {
    let subcategory = await model.PUT(req.params, req.body);
    res.status(201).json({
      status: 201,
      message: "subcategory successfully changed",
      data: subcategory,
    });
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async (req, res) => {
  try {
    let subcategory = await model.DELETE(req.params);
    res.status(201).json({
      status: 201,
      message: "subcategory deleted successfully",
      data: subcategory,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST, PUT, DELETE };
