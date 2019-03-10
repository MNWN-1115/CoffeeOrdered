const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

const coffeeSchema = new mongoose.Schema({
  Coffee: String,
  Method: String,
  Number_of_Cases: Number,
  Packets_per_Case: Number,
  Ship_date: Date,
  Star: Boolean,
  Order: String
});

var CoffeeOrder = mongoose.model('CoffeeOrder', coffeeSchema);

const saveOrder = (data) => {
  var order = new CoffeeOrder(data);
  order.save((err) => {
    if (err) console.log(err);
  })
}

const findOrder = (req, res) => {
  CoffeeOrder.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  }) 
}

export {
  saveOrder, findOrder
}