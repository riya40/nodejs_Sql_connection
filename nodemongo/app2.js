const mongoose = require('mongoose')

//define a schema for the document 
//the schema can be flexible but just creating a schema because in nodejs files it should pass 


const userSchema = new mongoose.Schema({
    name:String ,
    email:String,
})

//create a model based on schema 

const User = mongoose.model('User',userSchema);

async function connectToDatabase(){
    try{
        await mongoose.connect('mongodb+srv://drtej:hduser@mongocluster01.okinqv2.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('connected to mongodb');

    }catch(error){
        console.error('error connecting to mongodb',error)
    }

}

async function createDocument(name,email){
    try{
        const user = new User({name,email});
        await user.save();
        console.log('document created',user);
        

    }catch(error){
        console.error('error creating document',error)
    }
}

async function displayRecords(){
    try{
        const users = await User.find();
        console.log('Records:');
        users.forEach((user) => {
            console.log(`Name: ${user.name}, Email: ${user.email}`);
        });

    }catch(error){
        console.error('error displaying records',error)
    }
}


async function main(){
    await connectToDatabase();

    //create documents 

    await createDocument('lakshmi','lakshmi@gmail.com');
    await createDocument('priya','priya@gmail.com');

    //display the records 

    await displayRecords();

    //close connections

    mongoose.disconnect();

}

main();
