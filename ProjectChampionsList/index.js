var elementVerificado = document.getElementById("verificado")
var cont;
var contChamp = 0;
    function verifica(){
        if(document.getElementById("recebeUrl").value.startsWith("data:image/jpeg;base64") && contChamp <=6 ){
            document.getElementById("submitt").classList.add("habil");
            document.getElementById("submitt").disabled = false;
            elementVerificado.innerHTML = "";
            cont = 1;
        }  
            else if( cont == 0){
                elementVerificado.innerHTML = "Formato Inválido";
            }else if(contChamp == 6){
                elementVerificado.innerHTML = "Limite máximo de 6 campeões atingido";
            }
                else{
                    document.getElementById("submitt").disabled = true;
                    document.getElementById("submitt").classList.remove("habil")
                    console.log((document.getElementById("recebeUrl").value).startsWith("data:image/jpeg"))
                    cont = 0;
                    }

    }
        
        function adiciona(){
            var elementRecebeUrl = document.getElementById("recebeUrl").value;

            
                var elementListaChamps = document.getElementById("listaChamps");
            var mostraNaLista = "<img  src=" + elementRecebeUrl+">"
            elementListaChamps.innerHTML += mostraNaLista;
            document.getElementById("recebeUrl").value = "";
            contChamp++;
        }