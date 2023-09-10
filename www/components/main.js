        document.addEventListener('DOMContentLoaded', ()=> {

            const myHash = '7d8dab1e53981c3edd4fbbee4378c728';
            const myPublicKey = '0199f3cfc44b942137bc8dc6b45938d2';
            const myTimestamp = '1692300644'; 
            const myEndPoint = 'comics';   
            const myEndPoint1 = 'characters';       
            const divListaSeries = document.getElementById('listaSeries');

            fetch(`http://gateway.marvel.com/v1/public/comics?ts=${myTimestamp}&apikey=${myPublicKey}&hash=${myHash}`)
            .then((response)=> {
                return response.json();
            }).then((result)=> {
                const listaDeResultados = result.data.results;

                console.log(listaDeResultados)

                listaDeResultados.forEach(item => {
                   divListaSeries.insertAdjacentHTML('beforeend',
                   `<div>
                        <h6>${item.title}</h6>
                        <img src="${item.thumbnail.path}.${item.thumbnail.extension}">
                        </div>`);
                    
                });
            })
      })
      

