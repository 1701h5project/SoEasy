var ApiResult = require('./ApiResult')
var mysql = require("mysql");
var TEST_DATABASE = 'soeasy'; 
var connection;

function createConnection() {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'soeasy'
    });
}


module.exports={
    //根据条形码查找商品数据
    getGoods:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        // console.log(_collection,_condition)
        
        connection.query(`SELECT * FROM ${_collection} WHERE qrcode=${_condition}`,function(err, results, fields){
            
            _callback(results)
        })

        connection.end();
    },

    //增
    getVip:function(_collection, _condition, _callback){
            // console.log('3333333',_condition)
        createConnection();
        connection.connect();

        connection.query(`SELECT * FROM ${_collection} WHERE phone=${_condition}`,function(err, results, fields){
                console.log('22222',results)
                _callback(results)
        })

        connection.end();
    },
    //-------------------------------------------------//
     zhgetdata:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        connection.query('SELECT * FROM '+_collection, function(error, results, fields) {
           if(error){
                console.log(error)
            }else{
                _callback(results);
            }
            connection.end();
        })
    },
    zhsavedata:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        var obj=_condition;
        //console.log(`INSERT INTO ${_collection}(supplierName,contactName,gender,phone,mail,address) VALUES (${obj.supplierName},${obj.contactName},${obj.gender},${obj.phone},${obj.mail},${obj.address})`)
        connection.query(`INSERT INTO ${_collection}(supplierName,contactName,gender,phone,mail,address,date) VALUES(${JSON.stringify(obj.supplierName)},${JSON.stringify(obj.contactName)},${JSON.stringify(obj.gender)},${JSON.stringify(obj.phone)},${JSON.stringify(obj.mail)},${JSON.stringify(obj.address)},${JSON.stringify(obj.date)})`, function(error, results,fields){
           if(error){
                console.log(error)
            }else{
                _callback(results);
            }
        })
        connection.end();
    },
    zhgetSingleData:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        connection.query(`SELECT * FROM ${_collection} where indexid=${_condition}`, function(error, results, fields) {
            if(error){
                console.log(error)
            }else{
                _callback(results);
            }
            connection.end();
        })
    },
    zhmodifydata:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        var obj=_condition;
        connection.query(`UPDATE ${_collection} SET supplierName = ${JSON.stringify(obj.supplierName)},contactName = ${JSON.stringify(obj.contactName)},gender=${JSON.stringify(obj.gender)},phone=${JSON.stringify(obj.phone)},mail=${JSON.stringify(obj.mail)},address=${JSON.stringify(obj.address)} WHERE indexid = ${JSON.stringify(obj.indexid)}`, function(error, results, fields) {
            if(error){
                console.log(error)
            }else{
                _callback(results);
            }
            connection.end();
        })
    },
     zhsaveSortdata:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        var obj=_condition;
        //console.log(`INSERT INTO ${_collection}(supplierName,contactName,gender,phone,mail,address) VALUES (${obj.supplierName},${obj.contactName},${obj.gender},${obj.phone},${obj.mail},${obj.address})`)
        connection.query(`INSERT INTO ${_collection}(sort) VALUES(${JSON.stringify(obj.sortName)})`, function(error, results,fields){
           if(error){
                console.log(error)
            }else{
                _callback(results);
            }
        })
        connection.end();
    },
    zhmodifySortdata:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        var obj=_condition;
        connection.query(`UPDATE ${_collection} SET sort = ${JSON.stringify(obj.sort)} WHERE indexid = ${JSON.stringify(obj.indexid)}`, function(error, results, fields) {
            if(error){
                console.log(error)
            }else{
                _callback(results);
            }
            connection.end();
        })
    },
     zhsaveUnitdata:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        var obj=_condition;
        //console.log(`INSERT INTO ${_collection}(supplierName,contactName,gender,phone,mail,address) VALUES (${obj.supplierName},${obj.contactName},${obj.gender},${obj.phone},${obj.mail},${obj.address})`)
        connection.query(`INSERT INTO ${_collection}(unit) VALUES(${JSON.stringify(obj.unitName)})`, function(error, results,fields){
           if(error){
                console.log(error)
            }else{
                _callback(results);
            }
        })
        connection.end();
    },
    zhmodifyUnitdata:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        var obj=_condition;
        connection.query(`UPDATE ${_collection} SET unit = ${JSON.stringify(obj.unit)} WHERE indexid = ${JSON.stringify(obj.indexid)}`, function(error, results, fields) {
            if(error){
                console.log(error)
            }else{
                _callback(results);
            }
            connection.end();
        })
    },
    zhdelData:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        var obj=_condition;
        console.log(obj)
        connection.query(`DELETE FROM ${_collection} where indexid=${obj.indexid}`, function(error, results, fields) {
            if(error){
                console.log(error)
            }else{
                _callback(results);
            }
            connection.end();
        })
    },
    //---------------------------------------------------------------//
    //获取商品数据
    proget:function(_collection, _condition, _callback){
        // console.log(_collection,_condition)
        createConnection();
        connection.connect();
        //获取数据语法
        connection.query('SELECT * FROM '+_collection, function(error, results, fields) {

            _callback(results);
            connection.end();
        }) 
    },
    //添加商品数据
    proadd:function(_collection, _condition, _callback){
        // console.log(_collection,_condition)
        createConnection();
        connection.connect();
        //添加数据语法
        var  userAddSql = 'INSERT INTO '+_collection+'(indexid,qrcode,proname,proprice,specification,category,sale,storage,suppliername,pd) VALUES(0,?,?,?,?,?,?,?,?,?)';
        var  userAddSql_Params = [_condition.qrcode,_condition.proname,_condition.proprice,_condition.specification,_condition.category,_condition.sale,_condition.storage,_condition.suppliername,_condition.pd];

        connection.query(userAddSql,userAddSql_Params)
        connection.end();
    },
    //删除商品数据
    prodelete:function(_collection,_condition,_callback){
        // console.log(_collection,_condition)
        createConnection();
        connection.connect();
        //删除数据语法
        var  userDelSql = 'DELETE FROM goods WHERE qrcode = '+_condition.qrcode;

        connection.query(userDelSql)
        connection.end();
    },
    //修改商品数据
    proupdate:function(_collection,_condition,_callback){
        createConnection();
        connection.connect();
        //修改数据语法
        var userModSql = 'UPDATE goods SET qrcode = ?,proname = ?,proprice = ?,specification = ?,category = ?,sale = ?,storage = ?,suppliername = ?,pd = ? WHERE qrcode = ?';
        var userModSql_Params = [_condition.qrcode,_condition.proname,_condition.proprice,_condition.specification,_condition.category,_condition.sale,_condition.storage,_condition.suppliername,_condition.pd_condition.qrcode];
        
        connection.query(userModSql,userModSql_Params)
        connection.end();
    },

    // ----------会员
    gets:function(_collection, _condition, _callback){
        // console.log(_collection, _condition, _callback)
        var client = mysql.createConnection({ 
              user: 'root', 
              password: '', 
            }); 
        client.connect();
        client.query("use " + TEST_DATABASE);
        client.query( 
            'SELECT * FROM '+_collection, 
            function selectCb(err, results, fields){ 
                if (err) { 
                    throw err; 
                } 
                if(results){
                  // console.log(results)
                  _callback(results)
                }   
            } 
        );
        client.end(); 
    },
    // 增加
    memberAdd:function(_collection, _condition, _callback){
        var client = mysql.createConnection({ 
            user:'root', 
            password:'', 
        });
        client.connect();
        client.query("use " + TEST_DATABASE);
        var addVip = 'insert into '+_collection+'(phone,username,level,discount,integral,balance,date) values(?,?,?,?,?,?,?)';
        var param = [_condition.phone,_condition.username,_condition.level,_condition.discount,_condition.integral,_condition.balance,_condition.date];
        client.query(addVip, param, function(error, result){
             if(error){
                    console.log(error.message,123);
                }else{
                    _callback(result)
                    console.log('insert id: '+result.insertId);
                }
        })
        client.end();

    },
    // 删除
    memberDel:function(_collection, _condition, _callback){
        var client = mysql.createConnection({ 
            user:'root', 
            password:'', 
        }); 
        client.connect();
        client.query("use " + TEST_DATABASE); 
        // console.log(_condition)
        var delVip = 'delete from '+_collection+' where indexid = '+_condition.indexid+'';
        client.query(delVip, function(error, result){
            if(error){
                console.log(error.message,123);
            }else{
                _callback(result)
                console.log('affectedRows: '+result.affectedRows,234);
            } 
        })
        client.end();             
    },
    // 查找
    memberEdit:function(_collection, _condition, _callback){
        // console.log(_collection, _condition)
        var client = mysql.createConnection({ 
            user:'root', 
            password:'', 
        }); 
        client.connect();
        client.query("use " + TEST_DATABASE);
        var editVip = 'select * from '+_collection+' where indexid = '+_condition.indexid;
        // console.log(editVip)
        client.query(editVip,function(error, result){
             if(error)
                {
                    console.log(error.message,123);
                }else{
                    // console.log(result)
                    console.log('affectedRows: '+result.affectedRows,234);
                    _callback(result)
                }
            }); 
            client.end();                
    },
    // 修改
    memberModify:function(_collection, _condition, _callback){
        console.log(_condition.indexid)
        var client = mysql.createConnection({ 
            user:'root', 
            password:'', 
        });
        client.connect();
        client.query("use " + TEST_DATABASE); 
        var modifyVip = 'update '+_collection+' set phone =?,username = ?,level = ?,discount = ?,integral = ?,balance = ?,date = ? where '+_collection+'.indexid = '+_condition.indexid+'';
        var param = [_condition.phone,_condition.username,_condition.level,_condition.discount,_condition.integral,_condition.balance,_condition.date];
        console.log(modifyVip)
        client.query(modifyVip, param, function(error, result){
             if(error)
                {
                    console.log(error.message);
                }else{
                    _callback(result)
                    console.log('affectedRows: '+result.affectedRows);
                }
        })  
        client.end();
    },               

    //geiMSg
    getMsg:function(_collection, _condition, _callback){
        createConnection();
        connection.connect();
        console.log(_collection,_condition)
        
        var  userAddSql = 'INSERT INTO storagemanage(indexid,tiaoma,productname,huohao,danwei,guige,category,suppliers,jprice,lprice,hprice,pprice,yishou,kucun,kcxia,ticheng,jifen,shijian) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

        var  userAddSql_Params = [_condition.tiaoma,_condition.productname,_condition.huohao,_condition.danwei,_condition.guige,_condition.category,_condition.suppliers,_condition.jprice,
            _condition.lprice,_condition.hprice,_condition.pprice,_condition.yishou,_condition.kucun,_condition.kcxia,_condition.ticheng,_condition.jifen,_condition.shijian];

        connection.query(userAddSql,userAddSql_Params)
        _callback('success')
        connection.end();

    },
     defaultMsg:function(_collection, _condition, _callback){
         createConnection();
        connection.connect();

        var selectSQL = 'select * from `storagemanage`';

        var arr = [];

        connection.query(selectSQL, function(err, rows) {
            if (err) throw err;
            arr.push(rows)
            _callback(arr)
        });
        connection.end();
    },
    modifyMsg:function(_collection, _condition, _callback){
         createConnection();
        connection.connect();

        var userModSql = 'UPDATE storagemanage SET tiaoma = ?,productname = ?,huohao = ?,danwei = ?,guige = ?,category = ?,suppliers = ?,jprice = ?,lprice = ?,hprice = ?,pprice = ?,yishou = ?,kucun = ?,kcxia = ?,ticheng = ?,jifen = ?,shijian = ? WHERE indexid = ?';
   
        var  userModSql_Params = [_condition.tiaoma,_condition.productname,_condition.huohao,_condition.danwei,_condition.guige,_condition.category,_condition.suppliers,_condition.jprice,
        _condition.lprice,_condition.hprice,_condition.pprice,_condition.yishou,_condition.kucun,_condition.kcxia,_condition.ticheng,_condition.jifen,_condition.shijian,_condition.indexid];

        // modify
        connection.query(userModSql,userModSql_Params,function (err, result) {
                if(err){
                     console.log('[UPDATE ERROR] - ',err.message);
                     return;
                }       
               console.log('-------UPDATE----------');
        }); 
        _callback('success') 
        connection.end();
    },
    delMsg:function(_collection, _condition, _callback){
         createConnection();
        connection.connect();

        var delid= _condition.indexid
         var  userDelSql = `DELETE FROM storagemanage WHERE indexid = ${delid}` ;
        //ɾ
        connection.query(userDelSql,function (err, result) {
                if(err){
                  console.log('[DELETE ERROR] - ',err.message);
                  return;
                }       
            _callback(result)
               console.log('-------------DELETE--------------');
              
               
        });
         
        connection.end();
    }

    
}
