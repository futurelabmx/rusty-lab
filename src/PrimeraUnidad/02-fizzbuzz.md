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

## Python

```python
{{#include ../code/python/fizzbuzz.py}}
```

## C (ANSI + Kernel Coding Style)
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


# Preparando el proyecto

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

Utilizando el editor de tu preferencia abre el archivo `main.rs`, este es el
archivo que vamos a modificar, elimina la línea que contiene el mensaje de
impresión (`println!`) y procede a escribir el siguiente código, no te
preocupes si no lo entiendes pues lo explicaremos a lo largo de este capítulo.

{{#playpen ../code/rust/fizzbuzz.rs}}

> No ejecutes este código aún, es una versión de pruebas que
> modificaremos a lo largo de este y los siguientes capítulos.