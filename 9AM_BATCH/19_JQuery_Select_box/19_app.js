// Cars
let cars=[{id:1,name:'Maruthi Suzuki'},{id:2,name:'Suzuki NEXA'},
    {id:3,name:'Hyndai Motors'},{id:4,name:'Tata Motors'}];

// models
let models=[{car_id:1,name:'Swift'},{car_id:1,name:'Brezza'},{car_id:1,name:'Ertiga'},
    {car_id:1,name:'Celerio'},{car_id:2,name:'Baleno'},{car_id:2,name:'SCross'},
    {car_id:2,name:'Ciaz'},{car_id:2,name:'Ignis'},{car_id:3,name:'Creta'},
    {car_id:3,name:'Verna'},{car_id:3,name:'Grand i20'},{car_id:3,name:'Grand i20'},
    {car_id:4,name:'TATA Harrier'},{car_id:4,name:'TATA NEXA'},
    {car_id:4,name:'TATA Safari'},{car_id:4,name:'TATA Indica'}];

// Get the HTML elements
let carSelectBox = $('#car-select');
let modelSelectBox = $('#model-select');

// Loop the cars array
let carOptions = `<option>Select a Car</option>`;
for(let car of cars){
    carOptions += `<option value="${car.id}">${car.name}</option> \n`;
}
carSelectBox.append(carOptions);

// Change Event for car Select
carSelectBox.change(function () {
    let selectedId = Number.parseInt(carSelectBox.val());
    let selectedModels = models.filter(function(model) {
        return model.car_id === selectedId;
    });
    let modelOptions = `<option>Select a Model</option>`;
    for(let model of selectedModels){
        modelOptions += `<option>${model.name}</option>`;
    }
    modelSelectBox.empty().append(modelOptions);
});
