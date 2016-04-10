exports.getInvoice = function(req,res)
{
	var menuStr,items;
	items = req.param("items");
	var total = 0.0;
	var totalFin = 0.0;
	var arr = [];
	for(var item in items){
		if(items[item].count!=0){
			console.log()
			var itemTot = (items[item].price*items[item].count).toFixed(2);
			total = total + (items[item].price*items[item].count);
			arr.push({"item" : items[item].item,
					"price" : itemTot,
					"quantity" : items[item].count});
		}
	}
	console.log(arr);	
	totalFin = total.toFixed(2);
	console.log(totalFin);
	json_responses = {"total" : totalFin, "arr" : arr};
	res.send(json_responses);
}
