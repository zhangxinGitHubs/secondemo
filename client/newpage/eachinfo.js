/**
 * Created by Administrator on 2016/9/23.
 */
Template.everyinfo.helpers({
domain:function () {
    return this._id;
}
});
Template.everyinfo.events({
"click .edit":function () {
    $("#xm").val(this.name);
    $("#age").val(this.age);
    $("#sj").val(this.tel);
    $("#sr").val(this.birth);
    $("#bs").val(this._id);
},
    "click .del":function () {
    Data.remove(this._id);
       alert("删除成功！");
    }

});