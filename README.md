## Introduction
- This repo is the demo about round robin load balancer
- Setup with Node.js and Nginx
- Use in System design course at TechUp Thailand
  
## Instruction
1. Run `docker compose up --build`
2. Open another terminal and type `curl 127.0.0.1:80`
3. Observer the response from server (It should get response in round robin manner)

## Verification
- Server A weight = 3;
- Server B weight = 2;
- Server C weight; // default weight (1)

In the configuration, Server A has weight 3; Server B has weight 2; Server C has the default weight (1). With this configuration of weights, out of every 6 requests, 3 reuests are sent to Server A, 2 requests to Server B and 1 request to Server C 
