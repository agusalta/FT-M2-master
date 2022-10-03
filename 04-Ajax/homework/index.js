
// ver amigos
$('#boton').click(() => {
    var lista = $('#lista');
    lista.empty();

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

// borrar amigos
$('#delete').click(() => {
    var id = $('inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`, // === "palabra" + "var"
        type: 'DELETE',
        success: () => {
            $('#success').text(`tu amigo numero ${id} fue borrado de la lista`)
        }
    })
})
