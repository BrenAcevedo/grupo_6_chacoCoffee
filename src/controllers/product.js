module.exports = {
    detail: (req, res) => res.render('products/detail', {
        title: 'Detalle del producto',
    }),

    cart: (req, res) => res.render('products/cart', {
        title: 'Carrito',
    }),
    create: (req, res) => res.render('products/create', {
        title: 'Crear producto',
    }),
    edit: (req, res) => res.render('products/edit', {
        title: 'Editar producto',
    }), 
}