const LOGINADMIN = `
    select
        a.*
    from admins as a
    where username = $1 and password = crypt($2,a.password)
`;

export { LOGINADMIN };
