Vue.component('score-star',{
  template: "<ul class='scorestar' v-on='click:starclick($event)'><li data-starid='1'>&#9733;</li><li data-starid='2'>&#9733;</li><li data-starid='3'>&#9733;</li><li data-starid='4'>&#9733;</li><li data-starid='5'>&#9733;</li></ul>",
  replace: true,
  ready:function() {
    if(this.$el.hasAttribute('readonly')){
      this.readonly=true;
    }
    if(this.count){
      this._setstar(this.count);
    }
  },
  methods:{
    _setstar:function(selectedid){
      var lis=this.$el.children;
      var len=lis.length;
      if(selectedid&&selectedid>0){
        for(var i=0;i<len;i++){
           var li=lis[i];
           var liclst=li.classList;
           var starid=li.getAttribute('data-starid');
           this.count=+selectedid;
           if((+starid)<=selectedid){
             liclst.add('selected');
           }else{
               liclst.remove('selected');
           }
        }
      }
    },
    starclick:function($event){
      if(this.readonly)return;
      var selectedid=$event.target.getAttribute('data-starid');
          selectedid=(+selectedid);
          this._setstar(selectedid);
      }
  }
} );



var vm=new Vue({
            el: '#app',
            data: {
                  star:{
                    count:2
                  }
            }
        });
