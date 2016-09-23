/**
 * Created by Administrator on 2016/9/22.
 */
Template.formsub.events({
    "submit form":function (e) {
        e.preventDefault();
        var currentid=$(e.target).find('[name=id]').val();
        var name=$(e.target).find('[name=names]').val()
        var age=$(e.target).find('[name=age]').val()
        var tel=$(e.target).find('[name=tel]').val()
        var birth=$(e.target).find('[name=birth]').val()
        var info=
        {
            name:name,
            age:age,
            tel:tel,
            birth:birth,
        };
        if(name==""||age==""||tel==""||birth=="")
        {
            alert("YOU Have Errors,Please Check!");
        }
        else
            {
                if(currentid!="")
                {
                    Data.update(currentid,info);
                }
                else
                    {
                        Data.insert(info);
                    }
                $(e.target).find('[name=id]').val("");
                $(e.target).find('[name=names]').val("");
                $(e.target).find('[name=age]').val("");
                $(e.target).find('[name=tel]').val("");
                $(e.target).find('[name=birth]').val("");
            }

    }

});