(function () {

    var app = {
        initialize: function () {
            this.modules();
            this.setUpListeners();
        },
        modules: function () {

        },
        setUpListeners: function () {
            $('form').on('submit', app.submitForm);
            $('form').on('keydown', 'input', app.removeError);
            $('form').on('reset', app.clearFeedback);


        },
        submitForm: function (e) {
            e.preventDefault();

            form = $(this);
            var submitBtn = form.find('button[type="submit"]');
            app.clearFeedback();
            if (app.validateForm(form) === false) return false;
            submitBtn.attr('disabled', 'disabled');
            form.find('.alert').remove();
            var str = form.serialize();
            $.ajax({
                url: 'sent_mail/mail.php',
                type: 'POST',
                data: str
            })

                .done(function (msg) {
                    if (msg === "OK") {
                        console.log(msg);
                        var result = '<div class="alert alert-success" role="alert">Спасибо за заявку! Мы с вами свяжемся!</div>'
                        form.find('.msg').html(result);
                        console.log(form.find('.msg'));



                    } else {
                        console.log(msg);
                        result = '<div class="alert alert-danger" role="alert">' + msg + '</div>';
                        form.find('.msg').html(result);



                    }
                })
                .always(function () {
                    submitBtn.removeAttr('disabled');

                })
        },
        validateForm: function () {
            var inputs = form.find('input');
            valid = true;

            inputs.tooltip('destroy');

            $.each(inputs, function (index, val) {
                var input = $(val),
                    val = input.val(),
                    formGroup = input.parents('.form-group'),
                    label = formGroup.find('label').text().toLowerCase(),
                    textError = label;
                if (val.length === 0) {

                    formGroup.addClass('has-error').removeClass('has-success');
                    input.tooltip({
                        trigger: "manual",
                        placement: "right",
                        title: textError

                    }).tooltip('show');
                    valid = false
                } else {
                    formGroup.addClass('has-success').removeClass('has-error');
                }

            });
            return valid;
        },
        removeError: function () {
            $(this).tooltip('destroy').parents('.form-group').removeClass('has-error');
        },
        clearFeedback: function () {
            var alert = form.find('.alert');
            alert.remove();
        }

    }
    app.initialize();
}());

