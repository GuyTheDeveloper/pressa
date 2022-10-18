import model from "./model.js";

const GET = async (req, res) => {
  try {
    let events = await model.GET(req.params, req.query);
    res.send(events);
  } catch (error) {
    console.log(error);
  }
};

const POST = async (req, res) => {
  try {
    let event = await model.POST(req.body, req.file);
    res
      .status(201)
      .json({ status: 201, message: "we will check it", data: event });
  } catch (error) {
    console.log(error);
  }
};

const PUTACCEPTED = async (req, res) => {
  try {
    let event = await model.PUT(req.params);
    res.status(201).json({
      status: 201,
      message: "Accepted",
      data: event,
    });
  } catch (error) {
    console.log(error);
  }
};

const DELETEREJECTED = async (req, res) => {
  try {
    let event = await model.DELETE(req.params);
    res.status(201).json({
      status: 201,
      message: "rejected",
      data: event,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST, PUTACCEPTED, DELETEREJECTED };
