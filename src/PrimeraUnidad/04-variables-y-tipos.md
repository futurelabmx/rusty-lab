# Variables y tipos

Por muy gracioso que suene, una de las primeras cosas que los programadores
buscan al aprender un nuevo lenguaje es la manera que tiene de declarar
variables y sus respectivos tipos, en este capítulo aprenderemos a declarar
variables y a manejar diferentes tipos de datos en Rust.

Así mismo discutiremos los tipos primitivos, cuando *"tipear"* una variable o
no, el alcance de las variables y otros tratos especiales que posee rust como la
*inmutabilidad*.

## Comentarios

En un escenario ideal el código debería auto-documentarse por medio de las
buenas prácticas como los nombres descriptivos de variables, un estilo de
código limpio y una estructura impecable, aun así, existen casos donde se
necesita de un elemento extra para explicar o justificar la estructura de una
o varias partes de nuestro programa.

Rust sigue la forma de comentar de nuestro querido lenguaje C, por lo tanto
tenemos dos formas de comentar líneas de código:

* `//` Comentarios con doble barra para una sola línea.

```rust,ignore
// Esto es un comentario y no se compilará
```

* `/* */` Comentarios del tipo bloque para múltiples líneas.

```rust,ignore
/*
Esto
es
un
comentario
largo
*/
```

El estilo recomendado por la guía oficial de Rust es utilizar el comentario de
doble barra, incluso para varias líneas en caso de necesitar explicar tu código.

Procura utilizar el comentario multilínea solamente para comentar código.

> rust-doc también ofrece comentarios para documentación utilizando tres barras
> `///`, estos son útiles en proyectos grandes que necesitarán de algún tipo de
> documentación oficial además, en estos comentarios podemos utilizar sintáxis
> markdown para mejorar la legibilidad de nuestra documentación.


## Asignación de variables

Hasta ahora hemos visto varios tipos de valores, hemos visto cadenas, números
enteros, etc. Pero no debemos de confundir los valores con los objetos ni las
variables.

Tendremos que dejar algo muy claro desde el principio, la asignación de
variables es diferente en Rust si lo comparamos con otros lenguajes, esto es
para preservar 3 carácteristicas que hacen especial al lenguaje:

* **Seguridad**
* **Eficiencia**
* **Concisión**

A diferencia de otros lenguajes (como *JavaScript* o *Ruby*), Rust necesita un
poco más de planeación al escribir código pues necesitarás dictar los tipos de
los parámetros de tus funciones, de sus valores de retorno y de tus variables.

Por lo tanto Rust es un lenguaje *"Estáticamente tipado"* o de
*"Tipado estático"* lo que significa que el compilador deberá conocer el tipo
de los datos antes del tiempo de ejecución, este método que viene de lenguajes
veteranos como C o C++ ha sido rediseñado en Rust, pues el compilador revisará
que todos los caminos posibles de ejecución usarán valores solo de manera consistente con sus tipos. Esto permite que Rust detecte muchos errores de programación antes de tiempo, y es crucial para garantizar de seguridad de Rust.

Por lo tanto, en lugar de utilizar un intérprete o un compilador en tiempo real
como lo harían lenguajes como *Julia* o *LuaJIT (Lua Just In Time Compiler)*,
Rust fue diseñado para utilizar algo llamado *"Compilación anticipada"* es decir
una traducción completa de todo tu programa a código máquina antes de que
comience a ejecutarse, por ello los tipos de datos que Rust utilizar ayudan al
compilador a elegir una representación adecuada en el bajo nivel. 

Cuando Rust compila el código fuente el ejecutable resultante solo contiene
objetos que tengan una dirección de memoria y un valor. Dichos objetos no poseen
un nombre definido, pero estos mismos objetos necesitan de un identificador en
el código fuente para poder referenciarlos más tarde.

En Rust necesitaremos de la palabra reservada `let` para declarar cualquier
variable, por ejemplo:

```rust,ignore
let edad = 20;
let nombre = "Future Lab";
let flotante = 3.1415;
```

### Variables ¿inmutables?

Tus ojos no te están engañando, las variables en Rust son inmutables por
defecto, esto se hace para preservar la seguridad en Rust, pero esto no es el
fin del mundo, Rust nos ofrece la opción de mutar las variables a nuestro gusto
siempre y cuando cumplamos con ciertas reglas impuestas por el compilador.

> Rust no es el primer lenguaje en hacer esto, muchos lenguajes funcionales
> poseen esta característica. De hecho en los lenguajes 100% funcionales la
> mutabilidad de las variables no está permitida.

Veamos este pequeño ejemplo para ilustrar lo anterior:

<span><b>Ejemplo 1.0</b></span>
```rust,ignore
{{#include ../code/rust/inmutvars.rs}}
```

El siguiente código producirá un error de compilación específicamente este:

```
error[E0384]: cannot assign twice to immutable variable `edad`
 --> src/main.rs:4:5
  |
2 |     let edad = 10;
  |         ---- first assignment to `edad`
3 | 
4 |     edad = 5;
  |     ^^^^^^^^ cannot assign twice to immutable variable
```

Rust aplica la sabiduría que muchos programadores necesitan:
*"Muchos errores surgen de cambios involuntarios o incorrectos de las*
*variables, así que no permiré que el código cambie cualquier valor a menos que*
*lo haya permitido explícitamente."*

Si deseamos una variable mutable necesitaríamos indicarle a Rust específicamente
que la variable es mutable, si deseamos hacer algo así necesitamos hacer lo
siguiente:

<span><b>Ejemplo 1.1</b></span>
```rust
{{#include ../code/rust/mutvars.rs}}
```

Esto debería imprimir el siguiente mensaje en pantalla:

```
Tienes 20 años
Ahora tienes 21 años
```

Para darnos una mejor idea de como funciona la mutabilidad de las variables
aquí tenemos un ejemplo del código 1.0 escrito en C:

```c
{{#include ../code/c/inmutvars.c}}
```

> No intentes compilarlo, no funcionará.

A comparación de las variables mutables en el ejemplo 1.1:

```c
{{#include ../code/c/mutvars.c}}
```