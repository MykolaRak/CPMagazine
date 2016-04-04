if (cars.find().count() === 0) {
	 cars.insert({
	     name: 'car1',
    models: [
      {
        name: 'car1model1',
        year: [2012,2013,2014]
      },
      {
        name: 'car1model2',
        year: [2012,2013,2014]
      },
      {
        name: 'car1model3',
        year: [2012,2013,2014]
      }
    ]
  });
  cars.insert({
    name: 'car2',
    models: [
      {
        name: 'car2model1',
        year: [2012,2013,2014]
      },
      {
        name: 'car2model2',
        year: [2012,2013,2014]
      },
      {
        name: 'car2model3',
        year: [2012,2013,2014]
      }
    ]
  });
};
