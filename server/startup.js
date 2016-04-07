if (Cars.find().count() === 0 && Models.find().count() === 0) {
  Cars.insert({
    name: 'Honda'
  });
  Cars.insert({
    name: 'Subaru'
  });
  Models.insert({
    id: Cars.findOne({name: 'Honda'})._id,
    name: 'Civic',
    years: [2012,2013,2016]
  });
  Models.insert({
    id: Cars.findOne({name: 'Honda'})._id,
    name: 'Accord',
    years: [2012, 2013, 2016]
  });
  Models.insert({
    id: Cars.findOne({name: 'Honda'})._id,
    name: 'Jazz',
    years: [2012, 2013, 2016]
  });
  Models.insert({
    id: Cars.findOne({name: 'Subaru'})._id,
    name: 'Impreza',
    years: [2012, 2010, 2016]
  });
  Models.insert({
    id: Cars.findOne({name: 'Subaru'})._id,
    name: 'Legacy',
    years: [2012, 2011, 2016]
  });
  Models.insert({
    id: Cars.findOne({name: 'Subaru'})._id,
    name: 'Legacy Outback',
    years: [2012, 2013, 2016]
  });
}
