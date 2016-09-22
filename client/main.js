
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});
Template.hello.helpers({
  counter:function() {
    var num=Template.instance().counter.get();
    var msg="";
    if(num!=0){
      if(num%2==0)
      {
        msg="我是偶数:"+num;
      }
      else
      {
        msg="我是奇数:"+num;
      }
    }
    return msg;
  },
});
Template.reciveinfo.helpers({
  log:function () {
    return Data.find();
  }
});
Template.hello.events({
  'click button':function(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
