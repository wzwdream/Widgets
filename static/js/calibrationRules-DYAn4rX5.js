const s=(r,e)=>/^1[3-9]\d{9}$/.test(e),c=(r,e)=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/.test(e),a=(r,e)=>/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(e);export{a,s as b,c};