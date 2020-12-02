const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
var cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());
//const cors = require("cors");
//app.use(cors());

var con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'solo'
});

app.get("/api/user", function (req, res) {
    con.connect(function (err) {
        console.log("successfully conected to database");
        con.query("select * from utilisateur", function (err, result, fields) {
            console.log(result);
            console.log();
            console.log(err);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(result));
            
        });
    });
});
app.get("/error", function (req, res) {
    res.status(404).send('Not found');
});
//get personnage par user
app.get("/personnage/:idUser",function(req,res){
    con.connect(function(err){
        const sql = 'SELECT * FROM personnage WHERE idUser = ?';
        const value = req.params.idUser;
        con.query(sql,value,function(err,result,fields){
            if (err){
                console.log(err);
                res.status(503).end();
            }else {
                console.log(`Get fom id = ${value}  success`, result);
                res.end(JSON.stringify(result));
            }
        });
    });
});
//get liste skin
app.get("/skin", function (req, res) {
    con.connect(function (err) {
        console.log("successfully conected to database");
        con.query("select * from skin", function (err, result, fields) {
            console.log(result);
            console.log();
            console.log(err);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(result));
            
        });
    });
});

//get liste item
app.get("/item", function (req, res) {
    con.connect(function (err) {
        console.log("successfully conected to database");
        con.query("select * from item", function (err, result, fields) {
            console.log(result);
            console.log();
            console.log(err);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(result));
            
        });
    });
});
//delete detailsPerso
app.delete("/details/:id",function(req,res){
    con.connect(function(err){
        const sql = 'DELETE FROM detailsPerso WHERE id = ?';
        const value = req.params.id;
        console.log(value);
    con.query(sql,value, function(err,result,fields){
        if (err){
            console.log(err);
            res.status(503).end();
        }else {
            console.log('Delete success'+value, result);
			console.log(sql);
            res.end();
        }
    });
    });
});
//inscription
app.post("/user", function (req, res) {
    con.connect(function (err) {
        const sql = 'INSERT INTO utilisateur  SET ?';
        const value = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        };
        console.log(value);
        con.query(sql, value, function (err, result, fields) {
            if (err) {
                console.log(err);
                res.status(503).end();
            } else {
                console.log('Insert succesful', result);
                res.end();
            }
        });
    });
});
//insert skin
app.get("/err")
//insert item
app.post("/details", function (req, res) {
    con.connect(function (err) {
        const sql = 'INSERT INTO detailsPerso  SET ?';
        const value = {
            idPerso : req.body.idPerso,
			classe : req.body.classe,
			skin : req.body.skin,
            item: req.body.item
        };
        console.log(value);
        con.query(sql, value, function (err, result, fields) {
            if (err) {
                console.log(err);
                res.status(503).end();
            } else {
                console.log('Insert succesful', result);
                res.end();
            }
        });
    });
});
//login
app.post("/login", function (req, res) {
    con.connect(function (err) {
        const sql = 'Select id from utilisateur where username = ? and password = ?';
        const username = req.body.username;
		const password = req.body.password;
        con.query(sql, [username,password], function (err, result, fields) {
            if (err) {
                console.log(err);
                res.status(503).end();
            } else {
				if(result.length > 0){
					console.log('login successfull', result[0]);
					res.send(result[0]);
					res.end();
				}
				else{
					console.log('login failed');
					res.status(401).end();
				}
                
            }
        });
    });
});
//creation personnage
app.post("/createPerso", function (req, res) {
    con.connect(function (err) {
        const sql = 'INSERT INTO personnage SET ?';
        const value = {
			idUser : req.body.idUser,
            nom: req.body.nom
        };
        console.log(value);
        con.query(sql, value, function (err, result, fields) {
            if (err) {
                console.log(err);
                res.status(503).end();
            } else {
                console.log('Insert succesful', result);
                res.end();
            }
        });
    });
});
//supression personnage
app.delete("/personnage/:id",function(req,res){
    con.connect(function(err){
        const sql = 'DELETE FROM personnage WHERE id = ?';
        const value = req.params.id;
        console.log(value);
    con.query(sql,value, function(err,result,fields){
        if (err){
            console.log(err);
            res.status(503).end();
        }else {
            console.log('Delete success'+value, result);
			console.log(sql);
            res.end();
        }
    });
    });
});
//get details personnage
app.get("/detailsPerso1/:idPerso",function(req,res){
    con.connect(function(err){
        const sql = 'SELECT distinct(skin) FROM detailsperso WHERE idPerso = ?';
        const value = req.params.idPerso;
        con.query(sql,value,function(err,result,fields){
            if (err){
                console.log(err);
                res.status(503).end();
            }else {
                console.log(`Get fom id = ${value}  success`, result);
                res.end(JSON.stringify(result));
            }
        });
    });
});
app.get("/classe/:idPerso",function(req,res){
    con.connect(function(err){
        const sql = 'SELECT distinct(classe) FROM detailsperso WHERE idPerso = ?';
        const value = req.params.idPerso;
        con.query(sql,value,function(err,result,fields){
            if (err){
                console.log(err);
                res.status(503).end();
            }else {
                console.log(`Get fom id = ${value}  success`, result);
                res.end(JSON.stringify(result[0]));
            }
        });
    });
});
app.get("/detailsPerso2/:idPerso",function(req,res){
    con.connect(function(err){
        const sql = 'SELECT * FROM detailsperso WHERE idPerso = ?';
        const value = req.params.idPerso;
        con.query(sql,value,function(err,result,fields){
            if (err){
                console.log(err);
                res.status(503).end();
            }else {
                console.log(`Get fom id = ${value}  success`, result);
                res.end(JSON.stringify(result));
            }
        });
    });
});
app.get("/api/user/:id",function(req,res){
    con.connect(function(err){
        const sql = 'SELECT * FROM utilisateur WHERE id = ?';
        const value = req.params.id;
        con.query(sql,value,function(err,result,fields){
            if (err){
                console.log(err);
                res.status(503).end();
            }else {
                console.log(`Get fom id = ${value}  success`, result);
                res.end(JSON.stringify(result[0]));
            }
        });
    });
});

app.post("/api/user", function (req, res) {
    console.log("Received body", req.body);
    console.log("username", req.body.nomUser);
    con.connect(function (err) {
        const sql = 'INSERT INTO utilisateur  SET ?';
        const value = {
            nomUser: req.body.nomUser,
            prenomUser: req.body.prenomUser,
            dateNaissUser: "date('"+req.body.dateNaissUser+"')",
            sexeUser: req.body.sexeUser,
            emailUser: req.body.emailUser,
            numTelUser: req.body.numTelUser,
            Username: req.body.Username,
            password: req.body.password,
            etatU: req.body.etatU
        };
        console.log(value);
        con.query(sql, value, function (err, result, fields) {
            if (err) {
                console.log(err);
                res.status(503).end();
            } else {
                console.log('Insert succesful', result);
                res.end();
            }
        });
    });
});

app.delete("/api/user/:id",function(req,res){
    con.connect(function(err){
        const sql = 'DELETE FROM utilisateur WHERE id = ?';
        const value = req.params.id;
        console.log(value);
    con.query(sql,value, function(err,result,fields){
        if (err){
            console.log(err);
            res.status(503).end();
        }else {
            console.log('Delete success', result);
            res.end();
        }
    });
    });
});

app.put('/api/user/',function(res,req){
    console.log("Received body", req.body);
    con.connect(function(err){
        const sql = 'UPDATE utilisateur SET ? WHERE id = ?';
        const body = {
            username: req.body.username,
            password: req.body.password
        };
        console.log(value);
    con.query(sql,[body,req.body.id],function(err,result,fields){
        if(err){
            console.log(err);
            res.status(503).enc();
        }
        else{
            console.log('Modify success',result);
            res.end();
        }
    });
    });
});


app.listen(10002, () => {
    console.log("Server is running on port 10002.");
  });
/**
app.get("/", function (req, res) {
    res.send("Hello CSIA");
});

app.get("/yostane", function (req, res) {
    res.send("Hello yostane");
});

app.get("/test-json", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    const data = {
        name: "ken",
        vtrigger: "quick-step"
    };
    res.end(JSON.stringify(data));
});

app.post("/test-json", function (req, res) {
    res.status(401);
    res.end("KO");
});*/
