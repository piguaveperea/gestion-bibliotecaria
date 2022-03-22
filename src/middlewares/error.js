const Error404 =(req, res)=>{
    if(res.status(404)){
        res.render('404',{title: 'La pagina no existe'})
    }
}


module.exports = {
    Error404: Error404
}