/**
 * Created by Administrator on 2016/9/22.
 */
Template.formsub.events({
    "submit form":function (e) {
        e.preventDefault();

        var info=
        {
            name:$(e.target).find('[name=names]').val(),
            age:$(e.target).find('[name=age]').val(),
            tel:$(e.target).find('[name=tel]').val(),
            birth:$(e.target).find('[name=birth]').val(),
        };
       Data.insert(info);
        $(e.target).find('[name=names]').val("");
        $(e.target).find('[name=age]').val("");
        $(e.target).find('[name=tel]').val("");
        $(e.target).find('[name=birth]').val("");
    }

});