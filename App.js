//Creando una clase 
//Paso # 1 
class Product {
//Paso # 2 el Constructor para generar el parametro o propiedades del objeto
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}


//Paso # 4 clase para crear interfaz de usuario
class UI {
    addProduct() {

    }

    deleteProduct() {

    }

    showMessage() {

    }
}

//DOM EVENT cuando un usuario da un click en un button
document.getElementById('product-form').addEventListener('submit', function(e) {
// llamar los elementos del html
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    console.log(name, price, year);

    
    const product = new Product(name, price, year);
    
//Para cancelar el efecto submit de resfresh
    e.preventDefault();

})