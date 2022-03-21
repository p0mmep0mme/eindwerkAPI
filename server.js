const serverConfig = require("./server-config.js");
const consign = require("consign")
const app = serverConfig();
const poort = process.env.PORT || 4200;
const connectie = require("./database.js");
	

// routes
consign().include("./routes").into(app);


// luisteren naar de poort
app.listen(poort, () => {
	console.log("we luisteren op de poort", poort)
	connectie.connect(function(err){
		if(err){
			throw err;
		}
	console.log("database connected");
});
});
