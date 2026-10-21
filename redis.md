what is redis?
in-memory store?
Redis state -> RAM -> lightly fast
Uses
cache,sessionstore,otp,rate limiting,job queue
store in key-value pairs
ttl ->time to live, expiration time for keys

learn essential commands or methods
commands
set -> stores a single key-value pair
hset -> stores a hash key-value pair(Objects)
hgetall-> retrieves all fields and values of a hash
lpush -> adds an element to the head of a list
rpop -> removes and returns the last element of a list

drawbacks of redis lists
no retrival
no paralled workers

queue infrastructure in redis 
BullMQ

pub sub infrastructure in redis
Publisher and Subscriber model

incr
zincrby
zrevrange
zrevrank
(behind the scence)
select,update,locking,transactions