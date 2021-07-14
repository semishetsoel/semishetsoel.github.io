/*function sendEmail(client_name, client_phone, client_email, color) {
  $.ajax({
    type: 'POST',
    url: 'send.php',
    async: false,
    data: {
      phone: client_phone,
      name: client_name,
      email: client_email,
      color: color
    },
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, str) {
      alert("Возникла ошибка!");
    }
  });
};*/

$(document).ready(function () {

  /*$(document).on('submit', 'form', function () {

    //submit form
    let form = $(this);
    let button = $("[type=submit], button", form);
    let client_name = $.trim($('input[name=name]', form).val());
    let client_phone = $('input[name=phone]', form).val();
    let color = $('input[name=color]', form).val();
    let client_email = $('input[name=email]', form).val();

    if (!client_name) {
      alert('Укажите корректное имя!');
      return false;
    }
    if (!client_phone || client_phone.length < 7) {
      alert('Укажите корректный телефон!');
      return false;
    }
    button.prop("disabled", true);

    window.location.replace("call.html");


    sendEmail(client_name, client_phone, client_email, color);
    return false;
  });*/
});