const mongoose = require('mongoose');

async function connect ()
{
    try{
        await mongoose.connect('mongodb://localhost:27017/AssistantsCommunity',{
            //useNewUrlPager: true,
            //useUnifiedTopology: true
        });
        console.log('Connect Sussecfully !!!')
    }
    catch(e){
        console.log('Faill !!!'+e)
    }
   
}

module.exports = { connect };