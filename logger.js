function logger(log , type='log'){
    console[type](log);
}
export default logger ;        // chỉ export default được 1 lần

export const TYPE_LOG ='log' ;
export const TYPE_WARN = 'warn' ;
export const TYPE_ERROR ='error';