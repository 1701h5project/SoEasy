var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');
var multer = require ('multer');
var bodyParser = require('body-parser');
var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, '../../../../project/wrj/web/src/assets/imgs/goods/')  
  },  
  filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
  }  
}) 

var upload = multer({ storage: storage })
var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app){
  //根据条形码查找商品
  app.get('/getGoods',function(req,res){
      var obj = req.query.code
      DB.getGoods('goods',obj,function(results){
          res.send(results)
      })
  })

  //查找会员信息
    app.get('/getVip',function(req, res) {
      // console.log('111111',req.query)
      DB.getVip('member',req.query.phone,function(results){
          res.send(results)
      })
  }); 
  //----------------------------------------------------------------
  //供应商管理
  app.get('/zhgetdata',function(request,response){
      var obj = request.query;
      DB.zhgetdata('tsupplier',obj,function(result){
          response.send(result);
      })
  });
  app.post('/zhsavedata',urlencodedParser,function(request,response){
      var obj = request.body;
      console.log(obj)
      DB.zhsavedata('tsupplier',obj,function(result){
          response.send(result);
      })
  });
  app.get('/zhgetSingleData',function(request,response){
      var data = request.query.indexid;
      console.log(data)
      DB.zhgetSingleData('tsupplier',data,function(result){
          response.send(result);
      })
  });
  app.post('/zhmodifydata',urlencodedParser,function(request,response){
      var obj = request.body;
      console.log(obj)
      DB.zhmodifydata('tsupplier',obj,function(result){
          response.send(result);
      })
  });
  app.get('/zhdelData',function(request,response){
      var obj = request.query;
      console.log(obj)
      DB.zhdelData('tsupplier',obj,function(result){
          response.send(result);
      })
  });
  //类别管理
  app.get('/zhgetSortdata',function(request,response){
      var obj = request.query;
      DB.zhgetdata('tcategory',obj,function(result){
          response.send(result);
      })
  });
  app.post('/zhsaveSortdata',urlencodedParser,function(request,response){
      var obj = request.body;
      console.log(obj)
      DB.zhsaveSortdata('tcategory',obj,function(result){
          response.send(result);
      })
  });
  app.get('/zhgetSortSingleData',function(request,response){
      var data = request.query.indexid;
      console.log(data)
      DB.zhgetSingleData('tcategory',data,function(result){
          response.send(result);
      })
  });
  app.post('/zhmodifySortdata',urlencodedParser,function(request,response){
      var obj = request.body;
      console.log(obj)
      DB.zhmodifySortdata('tcategory',obj,function(result){
          response.send(result);
      })
  });
  app.get('/zhdelSortData',function(request,response){
      var obj = request.query;
      console.log(obj)
      DB.zhdelData('tcategory',obj,function(result){
          response.send(result);
      })
  });
  //单位管理
  app.get('/zhgetUnitdata',function(request,response){
      var obj = request.query;
      DB.zhgetdata('tunit',obj,function(result){
          response.send(result);
      })
  });
  app.post('/zhsaveUnitdata',urlencodedParser,function(request,response){
      var obj = request.body;
      console.log(obj)
      DB.zhsaveUnitdata('tunit',obj,function(result){
          response.send(result);
      })
  });
  app.get('/zhgetUnitSingleData',function(request,response){
      var data = request.query.indexid;
      console.log(data)
      DB.zhgetSingleData('tunit',data,function(result){
          response.send(result);
      })
  });
  app.post('/zhmodifyUnitdata',urlencodedParser,function(request,response){
      var obj = request.body;
      console.log(obj)
      DB.zhmodifyUnitdata('tunit',obj,function(result){
          response.send(result);
      })
  });
  app.get('/zhdelUnitData',function(request,response){
      var obj = request.query;
      console.log(obj)
      DB.zhdelData('tunit',obj,function(result){
          response.send(result);
      })
  });
  //-------------------------------------------------------------------
   //获取商品数据
  app.get('/getprodata',function(request,response){
      var obj = request.query;
      DB.proget('goods',obj,function(result){
          response.send(result);
      })
  }),
  //添加商品数据
  app.post('/addprodata',urlencodedParser,function(request,response){
      var obj = request.body;
      console.log(obj)
      DB.proadd('goods',obj,function(result){
          response.send(result);
      })
  })
  //修改商品数据
  app.post('/delprodata',urlencodedParser,function(request,response){
      var obj = request.body;
      DB.prodelete('goods',obj,function(result){
          response.send(result);
      })
  })
  //删除商品数据
  app.post('/modprodata',urlencodedParser,function(request,response){
      var obj = request.body;
      DB.proupdate('goods',obj,function(result){
          response.send(result);
      })
  })  
  // -------------------------------------会员

  app.get('/getdataa',function(request,response){
        var obj = request.query;
        // console.log('11111',obj)
        DB.gets('member',obj,function(result){
            response.send(result);
        })
    });


    // 增加会员
    app.post('/memberAdd',urlencodedParser,function(request,response){
      // console.log(request.query)
      var obj = request.query;
      DB.memberAdd('member',obj,function(result){
        // response.send(result);
        response.send(result);
      });
    });
    // 删除会员
    app.post('/memberDel',urlencodedParser,function(request,response){
      // console.log(request.query)
      var obj = request.query;
      DB.memberDel('member',obj,function(result){
        // response.send(result);
        response.send(result);
      });      
    });
    // 编辑会员
    app.post('/memberEdit',urlencodedParser,function(request,response){
      // console.log(request.query)
        var obj = request.query;
        DB.memberEdit('member',obj,function(result){
          // console.log(result)
        // response.send(result);
        response.send(result);       
      })
    });
    // 修改会员
    app.post('/memberModify',urlencodedParser,function(request,response){
      console.log('2222222',request.query)
      var obj = request.query;
      DB.memberModify('member',obj,function(result){
        response.send(result); 
      })
    }) 
// ------------------------------入库管理-----------------------
    app.post('/addMsg',urlencodedParser,function(req,res){
        console.log(req.body)
          DB.getMsg('storagemanage',req.body,function(result){
            res.send(result);
          })

    })
    app.get('/defaultMsg',urlencodedParser,function(req,res){
        DB.defaultMsg('storagemanage',req.body,function(result){
          res.send(result);
        })
    })
    app.post('/modifyMsg',urlencodedParser,function(req,res){
        DB.modifyMsg('storagemanage',req.body,function(result){
          res.send(result);
        })
    })
     app.post('/delMsg',urlencodedParser,function(req,res){
        DB.delMsg('storagemanage',req.body,function(result){
          res.send(result);
        })
    })




}