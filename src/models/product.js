const {readFileSync, writeFileSync, unlinkSync, existsSync} = require('fs');
const {resolve, format} = require('path');

const model = {
    file: resolve(__dirname,'../data/','products.json'), // Con que archivo se comunica.
    read: () => readFileSync(model.file), // Leer el contenido del archivo.
    list: () => JSON.parse(model.read()), // Convertimos a algo que podamos entender, manipular desde JS.
    convert: data => JSON.stringify(data,null,2), // Convierto cualquier info a JSON null y 2 mejoran la visualización
    write: data => writeFileSync(model.file, model.convert(data)), // Utiliza convert para guardar o sobreescribir el archivo
    all: () => model.list().filter(p => p.stock > 0), // p recorreria cada uno del objeto que tengo en .json
    match: (propiedad,valor) => model.all().find(producto => producto[propiedad] == valor),
    generate: data => Object({  //Armamos como el esqueleto. 
        id: model.list().length > 0 ? model.list().sort((a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0).pop().id + 1 : 1,  // Acá calculamos el id, si existe alguno tomamos el numero del ultimo y le sumamos 1 si no es 1 . No uso all porque eso me filtra por stock y no todos los que tengo en realidad.
        nombre: data.nombre,
        precio: Number(data.precio), // Convertimos el valor en número.
        descripcion: data.descripcion,
        variedad: data.variedad,
        olfato: data.olfato,
        peso: data.peso,
        stock: Number(data.stock),
        categoria: data.categoria,
        informacion: data.informacion,
        packaging: data.packaging,
        imagen: data.files && data.files.length > 0 ? data.files.map(file => file.filename) : null
        // sizes: data.sizes && data.sizes.length > 0 ? data.sizes : [] - Si quiero distintos talles por ejemplo.
    }),
    create: data => {
        let lista = model.list().sort((a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
        lista.push(data);
        model.write(lista);
    },
    update: data => {
        let productos = model.list().sort((a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
        productos = productos.map((producto) => {
            if(producto.id == data.id) {
                producto.nombre = data.nombre;
                producto.precio = Number(data.precio);
                producto.descripcion = data.descripcion,
                producto.variedad = data.variedad,
                producto.olfato = data.olfato,
                producto.peso = data.peso,
                producto.stock = Number(data.stock),
                producto.categoria = data.categoria,
                producto.informacion = data.informacion
                producto.packaging = data.packaging
                producto.imagen = data.files && data.files.length > 0 ? data.files.map(file => file.filename) : null
                return producto;
            }
            return producto;
        })
        model.write(productos)
    },
    trash: id => {
        let productos = model.list().sort((a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
        model.write(productos.filter(producto => producto.id != id));
    }
}

module.exports = model;