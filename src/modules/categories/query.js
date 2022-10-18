const GETCATEGORIES = `
    select
        c.*,
        json_agg(s.*) as sub_categories
    from categories as c
    left join sub_categories as s on s.category_id = c.category_id and s.status = 'active'
    where c.status = 'active' and case
                                    when $1 > 0 then c.category_id = $1
                                    else true
                                  end
    group by c.category_id
`;

const POSTCATEGORY = `
    insert into categories (category_name) values ($1) returning category_id,category_name
`;

const PUTCATEGORY = `
    update categories
        set category_name = $2
    where category_id = $1 and status = 'active'
    returning *
`;

const DELETECATEGORY = `
    update categories
        set status = 'deleted'
    where category_id = $1 and status = 'active'
    returning *
`;

export { GETCATEGORIES, POSTCATEGORY, PUTCATEGORY, DELETECATEGORY };
