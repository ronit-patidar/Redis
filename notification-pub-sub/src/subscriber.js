import Redis from 'ioredis';

const subscriber = new Redis('redis://localhost:6379');

subscriber.subscriber("notifications",(err)=>{
  if(err){
    console.log("Failed to subscribe:%s",err.message);
    return;
  }
  console.log("Subscribed successfully");
})
subscriber.on("message",(channel,message)=>{
  console.log("Received on ",channel,":",JSON.parse(message));
})