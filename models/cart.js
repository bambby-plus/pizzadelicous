module.exports=function Cart(oldCart){
    this.items=oldCart.items || {};
    this.totalQty=oldCart.totalQty || 0;
    this.totalPrice=oldCart.totalPrice || 0;

    this.add=function(item, id){
        var storedItem=this.items[item[0].name];
        if(!storedItem){
            storedItem=this.items[item[0].name]={item:item[0], qty:0, price:0};
        }
        storedItem.qty++;
        storedItem.price=storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    };

    this.sub=function(item, id){
        var storedItem=this.items[item[0].name];
        if(!storedItem){
            storedItem=this.items[item[0].name]={item:item[0], qty:0, price:0};
        }
        storedItem.qty--;
        storedItem.price=storedItem.item.price * storedItem.qty;
        this.totalQty--;
        this.totalPrice -= storedItem.item.price;
    };

    this.generateArray= function(){

        var arr=[];
        for(var id in this.items){
            arr.push(this.items[id]);
        }
        return arr;

    };
};