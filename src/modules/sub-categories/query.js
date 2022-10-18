const GETSUBCATEGORIES = `
    select
        s.*
    from sub_categories as s
    where s.status = 'active' and case
                                     when $1 > 0 then s.subcategory_id = $1 
                                     else true 
                                     end
`;

const POSTSUBCATEGORY = `
    insert into sub_categories (category_id,subcategory_name) values ($1,$2) returning *
`;

const PUTSUBCATEGORY = `
    with old_subcategory as (
        select
            category_id,
            subcategory_name
        from sub_categories
        where subcategory_id = $1
    ) update sub_categories as s
            set
            category_id = case
                            when $2 > 0 then $2 
                            else old.category_id
                          end,
            subcategory_name = case
                                when length($3) > 1 then $3
                                else old.subcategory_name
                               end
      from old_subcategory as old
      where s.subcategory_id = $1
      returning * 
`;

const DELETECATEGORY = `
    update sub_categories
        set status = 'deleted'
    where subcategory_id = $1 and status = 'active'
    returning *
`;

export { GETSUBCATEGORIES, POSTSUBCATEGORY, PUTSUBCATEGORY, DELETECATEGORY };
