
// ver amigos
$('#boton').click(() => {
    var lista = $('#lista');
    $.get('http://localhost:5000/amigos', function(data) {
       data.forEach(el => lista.append(`<li>${el.name}</li>`))
    })
})

// buscar amigos
$('#search').click(() => {
    var id = $('#input').val(); // === getElementById('input').value;
    $.get(`http://localhost:5000/amigos/${id}`, function(data) {
        $('#amigo').text(data.name); // === getElementById('amigo').innerHTML = data.name;
    })
})

