import { createSchema, createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import * as fs from 'fs';
import {CvResolver} from "./cv/cv.resolver";
const typeDefs = fs.readFileSync('./src/schema/schema.graphql', 'utf-8');

const yoga = createYoga({
  schema: createSchema({
    typeDefs: typeDefs,
    resolvers: {
      Query: [CvResolver],
    },
  }),
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql');
});
