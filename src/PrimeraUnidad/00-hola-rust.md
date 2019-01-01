# ¡Hola Rust!

Tenemos todo lo necesario, ahora vamos a escribir nuestro primer
programa en Rust.

Existe una tradición entre los programadores, siempre que se aprende un
nuevo lenguaje de programación, el primer programa que se escribe es un
*"Hola mundo"*.

No cubriremos a fondo el uso de la línea de comandos por lo tanto
asumiremos que ya posees las habilidades para crear, renombrar o
borrar directorios/archivos.

Vamos a crear nuestro primer archivo fuente de Rust y lo llamaremos
`main.rs`, es importante saber que TODOS los archivos de Rust terminan
con la extensión `.rs`, las reglas para el nombre de los archivos son las
mismas que aplican para otros lenguajes de programación.

Ahora con tu editor de texto favorito abre el archivo `main.rs` y coloca
lo siguiente:

{{#playpen ../code/rust/hello-world.rs}}

Es un pequeño programa que imprime las palabras `¡Hola Mundo!` en la
consola.

Puedes ejecutar el código desde este mismo libro aun así, te
recomendamos que practiques en tu terminal.

Guarda tu archivo `main.rs` y en tu terminal procede a llamar al
compilador de Rust llamado `rustc`. Mas adelante explicaremos como
funciona a fondo `rustc`, por ahora procederemos a compilar nuestro
programa de la siguiente manera:

```ignore
$ rustc main.rs
$ ./main
¡Hola Mundo!
```
> Los comandos están expresados en un entorno UNIX-Like.

Vamos a descomponer nuestro programa en partes para entender un poco mejor
lo que está pasando.

Veamos la primera parte del programa:

```rust,ignore
fn main() {
```

Lo primero que vemos es el abstracto `fn` el cual se utiliza para declarar
funciones en Rust. Mas delante podemos ver `main()`, esto es el identificador de
la función, a la derecha podemos ver un par de paréntesis, al igual que en otros
lenguajes los paréntesis al lado del identificador de la función sirven para
indicar los parámetros que esta va a recibir al momento de ser llamada.

El último elemento que podemos ver es una *"llave abierta"*, ésta indica el
inicio de un bloque de código `{`.

La siguiente línea que podemos ver es esta:

```rust,ignore
println!("¡Hola Mundo!");
```

A diferencia de otros lenguajes, Rust no utiliza funciones para la salida de
consola, en este caso `println!` es un macro que es un elemento de
*metaprogramación* que exploraremos más tarde, por ahora recuerda que al llamar
un macro siempre deberás de colocar un `!` después del identificador.

Dentro del macro `println!` encontramos el elemento `"¡Hola Mundo!"`. Esto es
una cadena de carácteres que funciona como argumento del macro.

En la última línea podemos ver una llave cerrada, la cual indica el final de un
bloque de código.

Rust es un lenguaje de programación compilado, si tienes experiencia con
lenguajes como C o C++ sabrás que después de escribir el código fuente
es necesario pasar el archivo resultante por un compilador, en el caso
de C o C++ se utiliza `gcc` o `clang`, en Rust usaremos `rustc`.

Si vienes de lenguajes dinámicos, mejor conocidos como interpretados como
Python o Ruby probablemente te sea un poco difícil acostumbrarte a
compilar y ejecutar. A diferencia de otros lenguajes de programación
compilados Rust puede considerarse como *adelantado* en esa cuestión ya
que puedes compilar un programa y enviar el binario generado a otra
persona para que lo ejecute, incluso sin tener Rust instalado.

Cuando proporcionas a otra persona tu script con terminación en `.rb` o
`.py` todo lo que necesitan es tener instalado en su computadora el
lenguaje de programación correspondiente.

Compilar nuestros programas con `rustc` está bien si estamos
desarrollando software simple, pero si deseamos crear proyectos mas
ambiciosos y con un poco mas de complejidad, en el capítulo **4**
discutiremos acerca de `cargo`, el gestor de paquetes de Rust.