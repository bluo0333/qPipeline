const express = require('express');
const app = express();
app.get('/api/a', (_,res)=>res.json([{id:1,name:'alpha',timestamp:Date.now()}]));
app.get('/api/b', (_,res)=>res.json([{id:2,name:'beta', timestamp:Date.now()}]));
app.get('/api/c', (_,res)=>res.json([
  {id:3,name:'gamma',timestamp:Date.now()},
  {id:4,name:'delta',timestamp:Date.now()}
]));
app.listen(4000, ()=>console.log('Mock API on :4000'));
