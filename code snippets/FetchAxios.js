app.post("/makeRequest", async(req, res) => {
    const{ url } = req.body;
    try {
        const response = await axios.get(url);
        res.json(response.data);
    }catch(error){
        res.json({error: error.message});
    }
  });
  app.get("/", (req, res) => {
  
     res.render('httpRequest');
     
});