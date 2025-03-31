import express from 'express';
import tweetRoutes from './src/routes/tweets.js'
import userRoutes from './src/routes/user.js'

const app = express();
app.use(express.json());

app.use("/api/tweet", tweetRoutes)
app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));