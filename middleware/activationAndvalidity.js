
const datetime=require('node-datetime')
const timeStamp=require('time-stamp');
function activationAndvalidity(req,res,next){
const days=req.body.days
const daysInMS=1000*3600*24*days
    //here we are getting the current date in the constant activationDate through timeStamp
    const activationDate=timeStamp('YYYY-MM-DD')
    //here we are creating the current timestamp of activationDate and storing it in constant
    const activationDateCurentTimeStamp = datetime.create(activationDate); 
//here we are converting the activationDateCurrentTimeStamp in milliseconds
    const activationDateCurentTimeStampInMS = activationDateCurentTimeStamp.now();
    //validity date in milliseconds
    const validityDateInMS=activationDateCurentTimeStampInMS+daysInMS
    //getting the timestamp of validity date
    const validityDateCurrentTimeStamp=datetime.create(validityDateInMS)
    //converting the validity date in displayable form
    const validityDate=validityDateCurrentTimeStamp.format('Y/m/d')
    const ACTIVATIONdate=activationDate;
    const VALIDITYdate=validityDate
    const DATES={ ACTIVATIONdate,VALIDITYdate}
    req.bawa=DATES
    next()

}
module.exports=activationAndvalidity