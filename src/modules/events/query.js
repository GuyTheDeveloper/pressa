const GETEVENTS = `
    select 
        e.*
    from events as e 
    where e.status = $2 and 
         (description ilike concat('%', $7::varchar, '%')) 
                and 
          case when $1 > 0 then e.event_id = $1 else true end
                and
          case when length($3) > 1 then e.event_date = $3 else true end 
                and
          case when $4 > 0 then e.subcategory_id = $4 else true end
                and
          case when length($5) > 1 then e.event_type = $5 else true end
                and
          case when length($6) > 1 then e.user_fullname = $6 else true end
          offset $8 limit $9
`;

const POSTEVENT = `
    insert into events (event_date,event_time,category_id,
        subcategory_id,event_type,link,user_type,
        user_fullname,user_profession,user_contact,
        user_spare_contact,user_legal_name,description,
        event_image,event_text) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$15,$14) returning *
`;

const ACCEPTEVENT = `
    update events 
        set status = 'accepted'
    where event_id = $1 returning *
`;

const REJECTEVENT = `
    update events
        set status = 'rejected'
    where event_id  = $1 returning *
`;

export { GETEVENTS, POSTEVENT, ACCEPTEVENT, REJECTEVENT };
