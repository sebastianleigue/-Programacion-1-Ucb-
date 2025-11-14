class Matrix {
  rows;
  cols;
  data;

  constructor(rowsParam, colsParam, defaultValue) {
    this.rows = rowsParam;
    this.cols = colsParam;
    this.data = [];

    for (let i = 0; i < rowsParam; i++) {
      const rowTemp = [];
      for (let j = 0; j < colsParam; j++) {
        rowTemp.push(defaultValue);
      }
      this.data.push(rowTemp);
    }
  }

  //Función de validacion de rango valido en la matriz
  isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  setValue(row, col, value) {
    //if (isValidPosition(row, col)) {
    this.data[row][col] = value;
    //}
  }

  getValue(row, col) {
    if (this.isValidPosition(row, col)) {
      return this.data[row][col];
    } else {
      return null
    }
  }

  fillRandom(min, max) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        this.data[i][j] = random;
      }
    }
  }

  ejercicioClase() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = (j % 3) + (i * 3 + 1);
      }
    }
  }





//patron tablero------------------------------------------------------------------
  ejercicio2() {
    for(let i = 0; i<this.rows;i++){
        for(let j = 0;j< this.cols;j++){
            this.data[i][j]= (i+j) %2 ? 1:0;
        }
    }

  }





//voltear matriz 90 grados sentido horario---------------------------------------
  ejercicio3() {
const n = this.rows;
const rotada = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotada[j][n - 1 - i] = this.data[i][j];
        }
    }
    this.data = rotada;
}






//matriz patron espiral----------------------------------------------------------
  ejercicio4() {
{   let n = this.rows;
    let valor = 1; 
    let inicioFila = 0;
    let finFila = n - 1;
    let inicioCol = 0;
    let finCol = n - 1;

    // Mientras queden capas por llenar
    while (inicioFila <= finFila && inicioCol <= finCol) {
      // ➤ Recorrer de izquierda a derecha
      for (let j = inicioCol; j <= finCol; j++) {
        this.data[inicioFila][j] = valor++;
      }
      inicioFila++;

      // ➤ Recorrer de arriba hacia abajo
      for (let i = inicioFila; i <= finFila; i++) {
        this.data[i][finCol] = valor++;
      }
      finCol--;

      // ➤ Recorrer de derecha a izquierda (si quedan filas)
      if (inicioFila <= finFila) {
        for (let j = finCol; j >= inicioCol; j--) {
          this.data[finFila][j] = valor++;
        }
        finFila--;
      }

      // ➤ Recorrer de abajo hacia arriba (si quedan columnas)
      if (inicioCol <= finCol) {
        for (let i = finFila; i >= inicioFila; i--) {
          this.data[i][inicioCol] = valor++;
        }
        inicioCol++;
      }
    }
  }
  }





//matriz con patrón de anillos alternados------------------------------------------
  ejercicio5() {
    const n = this.rows;
    const capas = Math.ceil(n / 2);

    for (let capa = 0; capa < capas; capa++) {
      const valor = capa % 2 === 0 ? 1 : 0; 

      
      for (let i = capa; i < n - capa; i++) {
        // arriba
        this.data[capa][i] = valor;
        // abajo
        this.data[n - 1 - capa][i] = valor;
        // izquierda
        this.data[i][capa] = valor;
        // derecha
        this.data[i][n - 1 - capa] = valor;
      }
    }
  
    }
    



// Generar matriz con patrón de serpiente diagonal--------------------------------
  ejercicio6() {
  

  const n = this.rows;          
  let contador = 1;            

  for (let d = 0; d < 2 * n - 1; d++) {
    let diagonal = [];

    for (let i = 0; i < n; i++) {
      let j = d - i;    
 
      if (j >= 0 && j < n) {
        diagonal.push([i, j]);}}
    if (d % 2 === 1) {
      diagonal.reverse();}
    for (const [fila, col] of diagonal) {
      this.data[fila][col] = contador;
      contador++;
    }
  }
  
    }





// matriz con patrón de triángulo superior izquierdo--------------------------------
    ejercicio7(){
      

  const n = this.rows; 
  for (let i = 0; i < n; i++) {     
    for (let j = 0; j < n; j++) {    

      if (i + j < n) {
        this.data[i][j] = 1;
      } else {
        this.data[i][j] = 0; 
      }

    }
  }
    }


//Matriz con patrón de flecha doble------------------------------------------------
ejercicio8(){
 const n = this.rows;
  const c = Math.floor(n / 2); // centro

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

      const distancia = Math.abs(i - c) + Math.abs(j - c);

      if (distancia <= c) {
        this.data[i][j] = 1;
      } else {
        this.data[i][j] = 0;
      }
    }
  }

}

//Sumar diagonales y comparar-------------------------------------------------------
ejercicio9() {
    const n = this.rows;

  let sumaPrincipal = 0;
  let sumaSecundaria = 0;

  for (let i = 0; i < n; i++) {

    sumaPrincipal += this.data[i][i];

    sumaSecundaria += this.data[i][n - 1 - i];
  }
  console.log("Suma diagonal principal:", sumaPrincipal);
  console.log("Suma diagonal secundaria:", sumaSecundaria);
  console.log("¿Son iguales?:", sumaPrincipal === sumaSecundaria);

  return {
    principal: sumaPrincipal,
    secundaria: sumaSecundaria,
    iguales: sumaPrincipal === sumaSecundaria
  };
}
//Detectar si una matriz es mágica--------------------------------------------------
ejercicio10() {
  const n = this.rows;
  const sumaObjetivo = this.data[0].reduce((a, b) => a + b, 0); // suma de la primera fila

  // Verificar filas
  for (let i = 1; i < n; i++) {
    const sumaFila = this.data[i].reduce((a, b) => a + b, 0);
    if (sumaFila !== sumaObjetivo) {
      console.log("¿Es mágica?: false (fila diferente)");
      return false;
    }
  }

  // Verificar columnas
  for (let j = 0; j < n; j++) {
    let sumaColumna = 0;
    for (let i = 0; i < n; i++) {
      sumaColumna += this.data[i][j];
    }
    if (sumaColumna !== sumaObjetivo) {
      console.log("¿Es mágica?: false (columna diferente)");
      return false;
    }
  }

  // Diagonal principal
  let sumaDiagPrincipal = 0;
  for (let i = 0; i < n; i++) {
    sumaDiagPrincipal += this.data[i][i];
  }
  if (sumaDiagPrincipal !== sumaObjetivo) {
    console.log("¿Es mágica?: false (diagonal principal)");
    return false;
  }

  // Diagonal secundaria
  let sumaDiagSecundaria = 0;
  for (let i = 0; i < n; i++) {
    sumaDiagSecundaria += this.data[i][n - 1 - i];
  }
  if (sumaDiagSecundaria !== sumaObjetivo) {
    console.log("¿Es magica?: false (diagonal secundaria)");
    return false;
  }

  // Si pasa todas las verificaciones
  console.log("¿Es magica?: true");
  return true;
}

//Contar cuántas filas son palíndromas--------------------------------------------
ejercicio11() {
let contador = 0;

  for (let i = 0; i < this.rows; i++) {

    // fila actual
    const fila = this.data[i];

    // reverso de la fila
    const reverso = [...fila].reverse();

    // comparar fila con reverso
    let esPalindroma = true;
    for (let j = 0; j < fila.length; j++) {
      if (fila[j] !== reverso[j]) {
        esPalindroma = false;
        break;
      }
    }

    if (esPalindroma) {
      contador++;
    }
  }

  console.log("Total de filas palíndromas:", contador);
  return contador;

}



















  toString() {
    return this.data.map(row => row.join('\t')).join('\n');
  }


  }