# Creando un programa FizzRust...FizzBuzz.

Hemos aprendo a las bases para utilizar nuestras herramientas de Rust y creamos
nuestro primer "Hola Mundo" en poco tiempo, pero ahora pasemos a crear un
programa más interesante, un programa llamado *"FizzBuzz"*.

## ¿Fizz..que?

FizzBuzz es un juego que se utiliza con los niños para mejorar su
capacidad de aplicar una división de manera mental. No, no planeamos
tratarte como un niño pues esta prueba también se utiliza en las
entrevistas de programación y funciona como un filtro, normalmente se
les pide lo siguiente a los candidatos:

*"Escriba un programa que imprima los números desde 1 hasta 100. Pero*
*en cada número que sea múltiplo de 3 se deberá imprimir "Fizz" en el*
*lugar del número, el mismo caso para los números que sean múltiplos de*
*5. Por cada número que sea múltiplo de 3 y 5 se deberá imprimir*
*FizzBuzz"*

Por mas simple que parezca la prueba, muchos programadores no logran
pasarla pues no es un patrón que se vea dentro de las enseñanzas clásicas
y por que no es posible representar las pruebas de manera directa y
simple sin necesidad de duplicar algo.

Aun así no nos vamos a adentrar en la complejidad de la prueba y
explicar los árboles de desiciones en este capítulo sería desviarnos
del objetivo principal, existen diferentes formas de resolver un
problema FizzBuzz en diferentes lenguajes, aquí puedes ver algunos ejemplos.

#### Python

```python
{{#include ../code/python/fizzbuzz.py}}
```

#### C (ANSI + Kernel Coding Style)
```c
{{#include ../code/c/fizzbuzz.c}}
```
> El problema con este ejemplo es que no se ve un caso para el
> "FizzBuzz". Nótese que no existe la impresión de una nueva línea
> en el cuarto printf. Si el número es un múltiplo de 3 y 5 las
> primeras dos condiciones se cumplen, por lo tanto ambos casos
> se ejecutan.

> Si deseas agregar un ejemplo de FizzBuzz al libro eres bienvenido,
> solo abre un *Pull Request* que incluya el programa con tu lenguaje
> de programación favorito :D

Bien, ahora vamos a tomar la aproximación de Rust. En este proyecto crearemos
el mismo programa pero con salida de colores y en el camino explicaremos por
encima algunos conceptos base de programación en Rust.


## Preparando el proyecto

Utilizando nuestros conocimientos previos lo primero que haremos será crear
un nuevo proyecto utilizando Cargo, vamos a llamarlo FizzBuzz.

`$ cargo new --bin fizzbuzz`

Ahora entremos en el directorio creado por Cargo:

`$ cd fizzbuzz`

Vamos a editar el archivo `Cargo.toml` el cual se encuentra por defecto, en
nuestro caso los programadores de Future Lab decidieron dejarlo de esta manera:

```toml
[package]
name = "fizzbuzz"
version = "0.1.0"
authors = ["Future Lab <mxfuturelab@futuremail.com>"]
edition = "2018"

[dependencies]
```

En la parte superior mencionamos que nuestro programa tendría una salida a
terminal de colores, para esto necesitamos agregar un `crate` a nuestra
sección `[dependencies]`. La crate que utilizaremos es
[colored](https://github.com/mackwic/colored) un paquete de Rust que nos
permite imprimir texto con decoraciones en la terminal.

Nuestro archivo `Cargo.toml` debería quedar así:

```toml
[package]
name = "fizzbuzz"
version = "0.1.0"
authors = ["Future Lab <mxfuturelab@futuremail.com>"]
edition = "2018"

[dependencies]
colored = "1.6"
```

Bien, tenemos las dependencias que necesitamos para nuestro programa en
Rust, digámosle a Cargo que las descargue y las compile para poder utilizarlas
en nuestro proyecto sin problema alguno con:

`$ cargo build`

Esto debería de descargar y compilar `colored` y dejarlo listo para usar:

```ignore
   Updating crates.io index
   Compiling lazy_static v1.2.0
   Compiling colored v1.6.1
   Compiling fizzbuzz v0.1.0 (/home/futurelab/Escritorio/fizzbuzz)
    Finished dev [unoptimized + debuginfo] target(s) in 13.38s
```

## Escribir una base

Utilizando el editor de tu preferencia abre el archivo `main.rs`, este es el
archivo que vamos a modificar, elimina la línea que contiene el mensaje de
impresión (`println!`) y procede a escribir el siguiente código, no te
preocupes si no lo entiendes pues lo explicaremos a lo largo de este capítulo.

{{#playpen ../code/rust/fizzbuzz.rs}}

> No ejecutes este código aún, es una versión de pruebas que
> modificaremos a lo largo de este y los siguientes capítulos.

## Comprendiendo el código

¿Que está pasando aquí? Hay muchos elementos nuevos (Claro, todo es nuevo
a diferencia del macro `println!` que vimos en el capítulo pasado) por lo que
vamos a volver a descomponer línea por línea todo el programa.

Revisemos dentro de la función `main`, esta función es la misma que utilizamos
en nuestro primer `hola mundo` por lo que no hay necesidad de explicarla así
que nos dirigiremos a la segunda línea de nuestro código actual:

```rust,ignore
{{#include ../code/rust/fizzbuzz.rs:2}}
```

### El iterador

Como mencionamos en el capítulo **2**, asumiremos que posees conocimientos
básicos de programación por lo que debe ser evidente que esto es algo
conocido como *"ciclo for"*, los exploraremos más adelante en el capítulo
de control de flujo, por ahora vamos a dejar claras las bases de un
ciclo `for` en Rust.

Lo primero que podemos observar es que la sintaxis de los ciclos `for`
no es similar a la utilizada en lenguajes como C, JavaScript o Java:

```c
for (x = 0; x < 10; x++) {
        printf("%i\n", x);
}
```

En su lugar (y en términos mas abstractos) los ciclos `for` en Rust
se ven algo así:

```rust,ignore
for x in 0..5 {
    println!("{}", x);
}
```

Si abstraemos los términos podríamos describirlos así:

```rust,ignore
for variable in expresion {
    código
}
```

Siendo "`expresion`" un iterador. En nuestro ejemplo elegimos el rango de
`0..5`, esta expresión consta de un inicio y un fin y el ciclo realizará
una iteración entre esos valores, aunque Rust posee rangos inclusivos,
por defecto el límite superior es exclusivo, por lo tanto nuestro ciclo
`for` imprimirá los valores del `0` al `4`, no hasta el número `5`.

La razón por la que Rust no posee ciclos `for` con una sintaxis parecida
a C es sencilla, al tener esa sintaxis se controla manualmente cada
elemento del ciclo lo cual deja el código suceptible a errores *humanos*.

Pero hay algo diferente en nuestro ciclo for, si volvemos por un momento
a nuestro código podemos notar que no tenemos un valor definido como
límite superior del ciclo:

```rust,ignore
{{#include ../code/rust/fizzbuzz.rs:2}}
```

En su lugar tenemos una llave abierta, indicando el inicio de las
instrucciones del ciclo. Esto es muy sencillo, cuando Rust encuentre
un ciclo `for` de este tipo lo ejecutará infinitamente.

Nos hemos equivocado a propósito, pues Rust posee una forma más sencilla
de realizar ciclos infinitos.

Por ahora continuaremos explorando la estructura del ciclo `for`:

```rust,ignore
{{#include ../code/rust/fizzbuzz.rs:3:7}}
```

### Múltiples casos, múltiples resultados.

Aquí podemos ver otro elemento *"antes de tiempo"* que viene del control
de flujo en Rust, en este caso `match`.

`match` es el equivalente a `switch` en otros lenguajes de programación
como C o C++, una alternativa a comparar y ejecutar los diferentes
valores que puede tomar una variable.

La estructura de la palabra clave `match` puede ser utilizada de formas
complejas y aunque no explicaremos a fondo su uso por ahora, intentaremos
explicarte como funciona `match` en el caso de nuestro código.

Para que `match` funcione correctamente necesita una expresión para
evaluar, como nosotros tenemos `x` como variable (declarada en el
alcance del ciclo `for`) y ésta se encuentra en uso como iterador
su valor mutará en cada *"vuelta"* del ciclo, en este caso `x` aumentará
su valor en una unidad por iteración por lo que `x` será lo que
evaluaremos.

Dentro de los paréntesis tenemos dos operaciones que procesarán `x` y
arrojarán un resultado que será enviado a cualquiera de los posibles
casos dentro de `match`, en este caso nuestras dos operaciones son las
siguientes: `x % 3` y `x % 5`.

El operador `%` cumple la misma función que en otros lenguajes, retorna
el residuo de la división entre dos números, sabiendo esto cada
iteración comparará a `x` dos veces, regresando el residuo del valor de
`x` dividido entre `3` y `5`, dependiendo del resultado se enviará
a la pantalla el mensaje.

Veamos la primera condición:

```rust,ignore
{{#include ../code/rust/fizzbuzz.rs:4}}
```
Si el residuo resultante de la división de `x`/`3` **Y** `x`/`5` es
igual a cero entonces se enviará a la pantalla el mensaje "FizzBuzz".

---

En la segunda condición las cosas cambian un poco, podemos observar
un elemento nuevo, un guión bajo (`_`), éste funciona de la misma
manera que un `default:` funciona dentro de un `switch`.

En este caso `_` funciona como un *"atrapa-todo"* en el cual caerán
todos los resultados que no coincidan don las condiciones expresadas en
los casos de `match`. Si observamos detenídamente el código podemos
llegar a la conclusión de que `_` funcionará en caso de que
la división de `x`/`3` ó `x`/`5` arrojen *cualquier valor diferente de 0*

```rust,ignore
{{#include ../code/rust/fizzbuzz.rs:5:7}}
```
---


### Agregando algo de color