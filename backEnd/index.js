const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pastry_shop",
});

db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("db connected");
  }
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/cakes", (req, res) => {
  const q = "SELECT * FROM cakes";
  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data)
  })
})

app.post("/cakes/add", (req, res) => {
  const q = "INSERT INTO cakes (`name`, `cover`, `description`, `price`) VALUES (?, ?, ?, ?)";
  const values = [req.body.name, req.body.cover, req.body.description, req.body.price];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data)
  })
})

app.put("/cakes/update/:id", (req, res) => {
  const cakeId = req.params.id;
  const { name, cover, description, price } = req.body;
  const q = "UPDATE cakes SET `name`=?, `cover`=?, `description`=?, `price`=? WHERE id=?";
  const values = [name, cover, description, price, cakeId];

  db.query(q, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data)
  })
})

app.delete("/cakes/delete/:id", (req, res) => {
  const cakeId = req.params.id;
  const q = "DELETE FROM cakes WHERE id=?";

  db.query(q, [cakeId], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data)
  })
})


app.listen(4000, () => {
  console.log("connected")
})
