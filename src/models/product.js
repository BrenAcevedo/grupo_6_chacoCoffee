const {readFileSync, writeFileSync} = require('fs');
const {resolve, format} = require('path');

const model = {
    file: resolve(__dirname,'../data/','products.json'), 
    read: () => readFileSync(model.file), 
    list: () => JSON.parse(model.read()), 
    convert: data => JSON.stringify(data,null,2),
    write: data => writeFileSync(model.file, model.convert(data)),
    all: () => model.list().filter(p => p.stock > 0), 
    match: (propiedad,valor) => model.all().find(producto => producto[propiedad] == valor),
    generate: data => Object({  
        id: model.list().length > 0 ? model.list().sort((a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0).pop().id + 1 : 1,  
        nombre: data.nombre,
        precio: Number(data.precio),
        marca: data.marca,
        descripcion: data.descripcion,
        variedad: data.variedad,
        olfato: data.olfato,
        origen: data.origen,
        resena: data.resena,
        peso: data.peso && Array.isArray(data.peso) ? data.peso : [data.peso],
        stock: Number(data.stock),
        categoria: data.categoria,
        informacion: data.informacion,
        packaging: data.packaging,
        imagen: data.files && data.files.length > 0 ? data.files.map(file => file.filename) : null
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
                producto.marca = data.marca,
                producto.descripcion = data.descripcion,
                producto.variedad = data.variedad,
                producto.olfato = data.olfato,
                producto.origen = data.origen,
                producto.resena = data.resena,
                producto.peso = data.peso && Array.isArray(data.peso) ? data.peso : [data.peso],
                producto.stock = Number(data.stock),
                producto.categoria = data.categoria,
                producto.informacion = data.informacion
                producto.packaging = data.packaging
                producto.imagen = data.files && data.files.length > 0 ? data.files.map(file => file.filename) : producto.imagen
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