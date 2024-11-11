class Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentario = comentario;
        this._sonido = sonido;
    }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    get img(){
        return this._img;
    }
    set comentario(nuevoComentario){
        this._comentario = nuevoComentario;
    }
    get sonido(){
        return this_sonido;
    }
}

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    rugir(){

    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    aullar(){

    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    gruñir(){

    }

}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    sisear(){

    }
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido, rugir){
        super(nombre, edad, img, comentarios, sonido);
    }
    chillar(){

    }
}

const animal = document.getElementById("animal").value;
const edad = document.getElementById("edad").value;
const comentario = document.getElementById("comentarios").value;


const nuevoAnimal = new Animal(animal, edad, comentario);


async function obtenerImagen() {
    try {
        let response = await fetch("animales.json");
        let data = await response.json();
        return data.animales;  
    } catch (error) {
        console.log(error);
    }
}

async function mostrarAnimal() {
    const animales = await obtenerImagen();

    if (!animales) {
        console.error("No se encontraron animales en el JSON.");
        return;
    }

   
    const seleccionado = document.getElementById("animal");
    const previewContainer = document.getElementById("preview");

    
    seleccionado.addEventListener('change', () => {
        const animalSeleccionado = seleccionado.value;
        const animal = animales.find(item => item.name === animalSeleccionado);

        
        previewContainer.innerHTML = '';

       
        if (animal) {
            const img = document.createElement('img');
            img.src = animal.imagen;
            img.alt = animal.name;
            img.classList.add('img-fluid');  
            previewContainer.appendChild(img);
        } else {
            console.warn("Animal no encontrado en el JSON:", animalSeleccionado);
        }
    });
}


mostrarAnimal();
