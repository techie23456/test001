import express from 'express'


import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express()

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

 app.post('/api/submit', async(req,res)=>{ 
//app.get('/', async(req,res)=>{        
     /*res.send("<img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRdxh9j9A6MwsayxAIkwRZTLiucT1KYOPKDEP85TL-uhWqHayj3'></img>")*/

    //   res.send({received:})

    https://raw.githubusercontent.com/techie23456/burgerZoom/refs/heads/main/burgetScan.png
   if(req.body.question === "dragon")
   {
      res.send({received:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRdxh9j9A6MwsayxAIkwRZTLiucT1KYOPKDEP85TL-uhWqHayj3'})
   }
   else{
     res.send({received:' https://raw.githubusercontent.com/techie23456/burgerZoom/refs/heads/main/burgetScan.png'})
   }

      
})

app.listen(8000,()=>{

    console.log(">>>>>>>Server started at port 8000")

})
