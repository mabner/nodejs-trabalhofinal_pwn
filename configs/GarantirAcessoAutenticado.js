module.exports = { 
   GarantirAcessoAutenticado (req, res, next) {
       if (req.isAuthenticated()) 
       {
         return next();
       }
       else {
         res.redirect('/');
       }
   //    
   }
}
//
/*
// Disponível na versão Node 12 acima.
//
export const GarantirAcessoAutenticado (req, res, next) => {
       if (req.isAuthenticated()) {
          return next();
       }
       res.redirect('/login');
}
//
*/
