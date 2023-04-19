const express=require('express')
const app=express();
const cors=require('cors');
const {Pool}=require('pg')

app.use(express.json());
app.use(cors());

const pool=new Pool({
    user:'postgres',
    host:'localhost',
    password:'Indumathi23@',
    port:5432,
    database:'empform'
})

app.post('/', async(req,res)=>{
    const {ename,mail,mobile,gender,qual,years,date} = req.body;
    try {
        await pool.query('insert into users values($1,$2,$3,$4,$5,$6,$7)',[ename,mail,mobile,gender,qual,years,date]);   
    } catch (error) {
        console.log(error);
    }
    res.json({msg:"posted data"});
})

app.get('/',async(req,res)=>{
    try {
        const sel = await pool.query('select * from users');
        const data= sel.rows;
        res.json(data);
    } catch (error) {
        console.log(error);
    }
    console.log("get success");
    
})

app.listen(3000,()=>{
    console.log("server is listening to port 3000....");
})

