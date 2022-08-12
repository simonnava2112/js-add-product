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
    addProduct(product) {
        const productList = document.getElementById('product-list')
        const element = document.createElement('div')
//Lo que va arrojar el HTML.
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong> Price</strong>: ${product.price}
                    <strong> Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        
    }

    resetForm() {
        document.getElementById('product-form').reset();

    }

    deleteProduct(element) {
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Succesfully', 'info')
        }
    }

    showMessage(message, cssClass) {
// Crear un elemento HTML o un div 
        const div = document.createElement('div');
// Le asignamos una clase
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message))
// Enviamos el mensaje en el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
// metodo para temporalizar el mensaje 
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000)



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

    const ui = new UI();

//Validacion de datos
    if(name === '' || price === '' || year === ''){
// El return para que no agregue mas elementos agregados
        return ui.showMessage('Complete Fields Please', 'danger');
    }

//Ejecucion de eventos de UI
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Product Added Succesfully', 'success');
//Para cancelar el efecto submit de resfresh
    e.preventDefault();

});

//Evento Delete Product
document.getElementById('product-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})