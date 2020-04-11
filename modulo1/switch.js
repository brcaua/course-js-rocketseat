//using switch for cases
function catSexo(sexo){
  switch (sexo){
    case 'M':
      return "Masculino";
    case 'F':
      return "Feminino";
  }
}

var resultado = catSexo('M')
console.log(resultado)