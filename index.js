
const express=require("express");
const passport= require("passport");
const googleStrategy= require("passport-google-oauth20");
const app=express();

passport.use(new googleStrategy({
    clientID:"313822891691-5ln4h6be1952kc9q21eg8pvi5c5scg60.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"/auth/google/callback"
},(accessToken, refreshToken, profile, done)=>{
    console.log(accessToken)
    console.log(refreshToken)
    console.log(profile)
}))

app.get("/auth/google", passport.authenticate("google",{
    scope:["profile", "email"]
}))

app.get("/auth/google/callback", passport.authenticate("google"))

const port= process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log("Listening to port 8080")
})