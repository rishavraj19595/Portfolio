import Redis from "ioredis";

const REDIS_URL = process.env.REDIS_URL;

let redis = null;

if (REDIS_URL) {
  try {
    redis = new Redis(REDIS_URL, {
      maxRetriesPerRequest: 2,
      connectTimeout: 4000,
      retryStrategy(times) {
        if (times > 3) return null;
        return Math.min(times * 500, 2000);
      },
    });

    redis.on("error", (err) => {
      console.warn("[Redis Warning]:", err.message);
    });
  } catch (error) {
    console.warn("[Redis Initialization Warning]:", error.message);
  }
}

export default redis;
