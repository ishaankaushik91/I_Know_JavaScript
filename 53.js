// Birthday Wisher
import schedule from "node-schedule";
import twilio from "twilio";

let accountSid = "AC896e81ba687df6a5972855b923c46601"; // Your Account SID from www.twilio.com/console
let authToken = "57861a3de74762c3adec08de9a51312c";   // Your Auth Token from www.twilio.com/console
let client = new twilio(accountSid, authToken);

let job = schedule.scheduleJob("Sat Mar 25 2022 12:00:00 GMT+0530", async() => {
        await SMS("Hey Puppy happy birthday, don't listen to assholes & be focused in life 🥳🤝");
});

async function SMS(data)
{
    try {
        
        let Response = await client.messages
        .create({
            body: data,
            to : '+918767318911',
            from : "+19377313145",
        })

    } catch (error) {
        console.log(error);
    }
}