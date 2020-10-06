/**
 * 
 * @param {String} url JSON path
 */
function getDataFromJson(url) {
  $.getJSON(url, function (data) {
    $("#datosTabla").html('');
    $.each(data, (index, value) => {
      if (index < 25) {
        console.log('hola mundo');
        $("#datosTabla").append(`
          <tr>
            <td>${value.fecha_de_notificaci_n}</td>
            <td>${value.ciudad_de_ubicaci_n}</td>
            <td>${value.atenci_n}</td>
            <td>${value.edad}</td>
            <td>${value.sexo}</td>
            <td>${value.tipo}</td>
            <td>${value.estado}</td>
            <td>${value.ubicaci_n_recuperado}</td>
          </tr>
        `);
      }
    });
  });
}

getDataFromJson('https://www.datos.gov.co/resource/gt2j-8ykr.json');