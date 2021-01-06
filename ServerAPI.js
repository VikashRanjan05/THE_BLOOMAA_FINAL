const EXPRESS=require('express');
const APP=EXPRESS();
const MONGOOSE=require('mongoose')
const cors=require('cors')
APP.use(cors())
APP.use(EXPRESS.json())
APP.use('/ragister',require('./routes/ragister.js'));
APP.use('/validator',require('./routes/ragister.js'))
APP.use('/login',require('./routes/login.js'));
APP.use('/passrcvry',require('./routes/passrcvry'))
APP.use('/passrcvryValidator',require('./routes/passrcvry'))
APP.use('/dlvryaddrssupdation',require('./routes/dlvryaddrssupdation'))
APP.use('/orders',require('./routes/orders'))
APP.use('/pymntverifyandupdation',require('./routes/pymntverifyandupdation'))
APP.use('/admin',require('./adminRoutes/admin.js'))
APP.use('/newAdmin',require('./adminRoutes/newAdmin.js'))
APP.use('/adminAccess',require('./adminRoutes/adminAccess.js'))
APP.use('/fndcnsumrbysbscrptiondate',require('./adminRoutes/fndcnsumrbysbscrptiondate.js'))
APP.use('/planactivation',require('./adminRoutes/planactivation.js'))
APP.use('/gettingUserSession',require('./routes/gettingUserSession'))
APP.use('/fndexpiredplans',require('./adminRoutes/fndexpiredplans'))
APP.use('/plandeactivation',require('./adminRoutes/plandeactivation'))
APP.use('/fndconsumerbynumber',require('./adminRoutes/fndconsumerbynumber'))
MONGOOSE.connect("mongodb+srv://databasedeveloper:warrior666@cluster0.pg4sw.mongodb.net/BLOOMADB?retryWrites=true&w=majority",{ useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true})
.then(res=>{console.log("DATABASE IS CONNECTED")})
.catch(err=>{console.log(err)})


APP.get('/',(req,res)=>{
    res.send('This is THE BLOOMA backend with nodemon')
})
APP.listen(5000);