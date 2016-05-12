var express=require('express')
var app=express();
var path=require('path')
var mysql=require('mysql');
var port=process.env.PORT || 5000
var con=mysql.createConnection({

        host: "ec2-52-37-241-124.us-west-2.compute.amazonaws.com",
        user: "root",
        password: "password",
        database: "credit_data"
});


app.use(express.static(__dirname+'/'))


app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
 next();
});

function db_connect()
        {
        con.connect(function(err){
                if(err)
                        throw err;
                else
                        console.log("Connection established succesfully");

                });
        }



app.get('/',function(req,res){
         res.sendFile(path.join(__dirname+'/page/index.html'))

})


app.get('/approved',function(req,res){
        var statement="select count(*) as value from moonshot_results where prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})

app.get('/notapproved',function(req,res){
        var statement="select count(*) as value from moonshot_results where prediction='NOT APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})
 

app.get('/agefemavg',function(req,res){
        var statement="select AVG(Age) as avg from moonshot_results where Male='FEMALE' and Prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/agemavg',function(req,res){
        var statement="select AVG(Age) as avg from moonshot_results where Male='MALE' and Prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/incomefemmavg',function(req,res){
        var statement="select AVG(Income) as avg from moonshot_results where Male='FEMALE' and Prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/incomemmavg',function(req,res){
        var statement="select AVG(Income) as avg from moonshot_results where Male='MALE' and Prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/incomemavg',function(req,res){
        var statement="select AVG(Income) as avg from moonshot_results where Prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/edulevelapprovedtop',function(req,res){
        var statement="select EducationLevel,count(*) as count from moonshot_results  where Prediction='APPROVED' group by EducationLevel order by count desc LIMIT 5;";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})



app.get('/edulevelnotapproved',function(req,res){
        var statement="select EducationLevel,count(*) as count from moonshot_results  where Prediction='NOT APPROVED' group by EducationLevel";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/avgfemaleempl',function(req,res){
        var statement="select AVG(YearsEmployed) as avg from moonshot_results where Male='FEMALE' and Prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/avgmaleempl',function(req,res){
        var statement="select AVG(YearsEmployed) as avg from moonshot_results where Male='MALE' and Prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/avgempl',function(req,res){
        var statement="select AVG(YearsEmployed) as avg from moonshot_results where Prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/avgfemcredit',function(req,res){
        var statement="select AVG(creditscore) as avg from moonshot_results where Male='FEMALE' and Prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/avgmcredit',function(req,res){
        var statement="select AVG(creditscore) as avg from moonshot_results where Male='MALE' and Prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/avgcredit',function(req,res){
        var statement="select AVG(creditscore) as avg from moonshot_results where Prediction='APPROVED'";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/areaapprovedtop',function(req,res){
        var statement="select count(*) as count,zipcode from moonshot_results where Prediction='APPROVED' group by ZipCode order by count desc LIMIT 5;";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})


app.get('/areanotapproved',function(req,res){
        var statement="select count(*) as count,zipcode from moonshot_results where Prediction='NOT APPROVED' group by ZipCode;";
        con.query(statement,function(err,rows){
                if(err) throw err;
                else{
                        console.log("Data Retrieval Success");
                        res.json(rows);
                }
        })

})






app.listen(port);
console.log("Go to port : "+port)
