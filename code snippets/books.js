app.post("/addBook", (req,res) => {
    const {title, author, publicationYear,review} = req.body;
    books.push({title, author, publicationYear,review});
    res.redirect("/");
});

app.get("/", (req, res) => {
    res.render("books", {books});
   
});