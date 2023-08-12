class FrontController{
   

    static dashboard = (req,res)=>{
        try {
            res.render('dashboard')
        } catch (error) {
            console.log(error)
        }
    }
    
    static registration = (req,res)=>{
        try {
            res.render('registration')
        } catch (error) {
            console.log(error)
        }
    }

    static login = (req,res)=>{
        try {
            res.render('login')
        } catch (error) {
            console.log(error)
        }
    }
    static ab = (req,res)=>{
        try {
            res.render('ab')
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = FrontController