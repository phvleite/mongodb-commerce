db.produtos.updateMany({
  ingredientes: { $all: ["picles"] },
}, {
  $push: { valoresNutricionais: { $each: [], $slice: 3 } },
});
db.produtos.find({
  ingredientes: { $all: ["picles"] },
}, {
  _id: 0,
  nome: 1,
  ingredientes: 1,
  valoresNutricionais: 1,
});
