function admincontroller(app, db){
    app.get('/admin', (req,res)=>{
        res.render('admin/dashboard')
    })
// PRODUCT ROUTE
    app.get('/product', (req,res)=>{
        res.render('admin/product')
    })

    app.post('/productupload', (req,res)=>{
        console.log(req.body);
    })

    app.post('/productdelete', (req,res)=>{
        console.log(req.body);
    })

    app.post('/productupdate', (req,res)=>{
        console.log(req.body);
    })
// END
    app.get('/removeproduct', (req,res)=>{
        res.render('admin/removeProduct')
    })
// BLOG ROUTE
    app.get('/blogadmin', (req,res)=>{
        res.render('admin/blogadmin')
    })

    app.post('/blogpostcontent', (req,res)=>{
        console.log(req.body);
    })

    app.post('/blogdeletepost', (req,res)=>{
        console.log(req.body);
    })

    app.post('/blogcategoryadd', (req,res)=>{
        console.log(req.body);
    })

    app.post('/blogtagadd', (req,res)=>{
        console.log(req.body);
    })
    
    app.delete('/blogcategoryremove/:categoryname', (req,res)=>{
        console.log(req.params.categoryname);
        res.json('Deleted Category')
    })

    app.delete('/blogtagremove/:tagname', (req,res)=>{
        console.log(req.params.tagname);
        res.json('Deleted Tag')
    })

// END
// ORDER ROUTE
    app.get('/orders', (req,res)=>{
        res.render('admin/orders')
    })

    app.post('/ordersearch', (req,res)=>{
        console.log(req.body)
    })

    app.post('/orderdeleteorderid', (req,res)=>{
        console.log(req.body)
    })
    
// END
// MEMBERS ROUTE
    app.get('/members', (req,res)=>{
        res.render('admin/members')
    })

    app.post('/memberdeletemember', (req, res)=>{
        console.log(req.body)
    })
// END
// MESSAGE ROUTE
    app.get('/messages', (req,res)=>{
        res.render('admin/messages')
    })

    app.post('/messagesendmail', (req, res)=>{
        console.log(req.body)
    })

    app.post('/messagedeletemessage', (req, res)=>{
        console.log(req.body)
    })
// END
// COUPON ROUTE
    app.get('/coupon', (req,res)=>{
        res.render('admin/coupon')
    })

    app.post('/couponsavecouponcode', (req, res)=>{
        console.log(req.body)
    })

    app.get('/coupongeneratecouponcode', (req, res)=>{
        let alpha=[
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            '0','1','2','3','4','5','6','7','8','9',
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
        ]
    
        
        let code=[]
        let codegetter=''
    
        for(let a=0;a<9;a++){
            let worker=Math.floor(Math.random()%100*62);
            code.push(alpha[worker]);
            codegetter=codegetter+code[a]
           
        }
        res.json(codegetter)
    })

    app.post('/coupondeletecouponcode', (req, res)=>{
        console.log(req.body)
    })

// END
    function ensureAuthenticate(req, res, next){
        console.log(req.session.user);
        // if(req.session.user!=null){
        //   return next();
        // }
        // else{
        //   res.redirect('/login')
        // }
      }
   
}
module.exports = admincontroller;