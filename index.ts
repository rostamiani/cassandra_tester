console.log("Initializing Benchmark");

// import cassandra from 'cassandra-driver';
import { Client } from 'cassandra-driver';
// let Client = import('cassandra-driver');


const db =  new Client({
    // contactPoints: ['h1', 'h2'],
    // localDataCenter: 'datacenter1',
    keyspace: 'skyroom`'
})

// db.execute("select * from users",result=>{
//     console.log(result);
// })