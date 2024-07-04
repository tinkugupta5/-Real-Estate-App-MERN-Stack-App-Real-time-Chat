import express from 'express';
import postRoute from './routes/post.route.js';
import authRoute from "./routes/auth.route.js";

const app = express();

app.use("/api/posts",postRoute)
app.use("/api/auth",authRoute)

app.listen(8800,()=>{
    console.log("Server is running")
})

// 17:46
// https://youtu.be/eJ3YysWaP_A?t=1066