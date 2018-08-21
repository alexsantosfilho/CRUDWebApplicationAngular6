var mongoose = require('mongoose');

var ProdutoSchema = new mongoose.Schema({
  idcanal: String,
  sku: String,
  data: String,
  quantidade: String,
  dataAtualizada: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Produto', ProdutoSchema);
