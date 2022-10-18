import { fetch, fetchAll } from "../../lib/postgres.js";
import { GETEVENTS, POSTEVENT, ACCEPTEVENT, REJECTEVENT } from "./query.js";

const GET = async (
  { eventId = 0 },
  {
    status,
    page,
    limit,
    event_date = "",
    subcategory,
    type,
    username = "",
    search,
  }
) => {
  try {
    page = page || 1;
    limit = limit || 10;
    let events = await fetchAll(GETEVENTS, [
      eventId,
      status,
      event_date,
      subcategory,
      type,
      username,
      search,
      (page - 1) * limit,
      limit,
    ]);
    return events;
  } catch (error) {
    console.log(error);
  }
};

const POST = async (
  {
    event_date,
    event_time,
    category_id,
    subcategory_id,
    event_type,
    link,
    user_type,
    user_fullname,
    user_profession,
    user_contact,
    user_spare_contact,
    user_legal_name = "",
    description,
    event_text,
  },
  { filename }
) => {
  try {
    let event = await fetch(POSTEVENT, [
      event_date,
      event_time,
      category_id,
      subcategory_id,
      event_type,
      link,
      user_type,
      user_fullname,
      user_profession,
      user_contact,
      user_spare_contact,
      user_legal_name,
      description,
      event_text,
      filename,
    ]);
    return event;
  } catch (error) {
    console.log(error);
  }
};

const PUT = async ({ eventId }) => {
  try {
    const event = await fetch(ACCEPTEVENT, [eventId]);
    return event;
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async ({ eventId }) => {
  try {
    const event = await fetch(REJECTEVENT, [eventId]);
    return event;
  } catch (error) {
    console.log(error);
  }
};

export default { GET, POST, PUT, DELETE };
