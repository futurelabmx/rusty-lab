# Cargo ¿run?

En el capítulo anterior creamos nuestro primer programa en Rust, un simple
"Hola mundo".

Pero pensemos un momento: ¿Y si deseamos crear un proyecto más grande?, ¿Qué tal
si necesitamos crear una herramienta de línea de comandos mas compleja? o quizá
tenemos una gran idea para crear un API para usarse en Inteligencia Artificial.

De una forma u otra necesitaremos una forma de manejar nuestro
proyecto de manera eficiente, aquí entra `cargo` el gestor de paquetes
de Rust.

Cargo no solo se limita a ser un gestor de paquetes, también es
un sistema de construcción y un excelente manejador de dependencias.
Muchos programadores de Rust, a los cuales llamaremos *Rustáceos* en
adelante (Derivado de la palabra *"Crustáceos"*) utilizan cargo para
manejar sus proyectos ya que éste realiza muchas acciones por
nosotros, descarga y compila las bibliotecas que son dependencias de
nuestro código, le da formato a nuestro código si somos inexpertos en
el tema, ejecuta pruebas y despliega nuestro código listo para enviarse
a producción.

Casi todos (por no decir la palabra *"Todos"*) los proyectos de Rust
utilizan Cargo, si has instalado Rust utilizando el instalador oficial
(`rustup`) entonces ya posees Cargo instalado y listo para usarse.

## Primer proyecto con Cargo

Para crear un nuevo proyecto utilizando Cargo debemos ejecutar el
siguiente comando:

`$ cargo new --bin hola_cargo`

Esto creará un nuevo proyecto de Cargo, si entramos en el directorio
creado nos daremos cuenta que dentro hay varios archivos, un directorio
y que se ha inicializado un nuevo repositorio con la herramienta `git`.

Vamos a editar el archivo mas llamativo del directorio llamado
`Cargo.toml`:

```toml
[package]
name = "hola_cargo"
version = "0.1.0"
authors = ["nombre <nombre@ejemplo.com>"]
edition = "2018"

[dependencies]
```
La primera línea del archivo es la sección `[package]` que indicará
todos los detalles al momento de configurar un paquete de Cargo.

Las siguientes líneas contienen información necesaria para poder
construir y compilar el paquete en cuestión:

* Nombre del paquete o `crate`.
* Versión del paquete
* Autor o autores del paquete
* La edición de Rust (Hablaremos mas adelante de eso).

La siguiente sección se llama `[dependencies]`, debajo de esta se
colocarán todas las dependencias requeridas para construir nuestro
paquete de Rust, las usaremos mas adelante.

Como mencionamos más arriba, cargo genera un directorio de nombre `src`
en el cual se incluye un archivo llamado `main.rs`, este archivo en
cuestión contiene un "Hello World" dentro.

Cargo asume que *TODOS* tus archivos de código fuente se encontrarán
dentro del directorio `src/` ya que el directorio raíz del proyecto solo
estará dedicado a información acerca del mismo, véase archivos `README`,
`LICENSE` o las configuraciones escritas en TOML.

## Ejecutar proyectos utilizando cargo

Si deseamos construir un proyecto utilizando Cargo solo es necesario
escribir en nuestra terminal (dentro del directorio de nuestro
proyecto):

`$ cargo build`

La saluda de la terminal nos debería mostrar una salida indicandonos si
nuestro proyecto se pudo construir o si falló en algún punto:

```ignore
   Compiling hola_cargo v0.1.0 (/home/FutureLab/Escritorio/hola_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.39s
```

Cuando le damos la instrucción `build` a cargo éste creará un binario
ejecutable en un nuevo árbol de directorios, específicamente dentro
de `target/debug/<archivo binario>`.

Además de compilar un binario ejecutable Cargo también descargará y
compilará las dependencias necesarias para nuestro proyecto, al mismo
tiempo creará un archivo nuevo llamado `Cargo.lock`, no te alarmes,
este archivo vigilará las versiones de tus dependencias.

Si bien podríamos ejecutar los binarios desde su ruta con
`$ ./target/debug/hola_cargo` esto es ineficiente, por lo que cargo
tiene otra función para compilar y ejecutar nuestros proyectos en un
solo comando:

`$ cargo run`

Si ejecutamos esta orden, Cargo buscará los archivos `.rs` dentro de
nuestro directorio `src/`, los compilará e inmediatamente después los
ejecutará si no encontró problema alguno.

```ignore
    Finished dev [unoptimized + debuginfo] target(s) in 0.01s
     Running `target/debug/hola_cargo`
Hello, world!
```

Cargo posee una variedad de comandos entre ellos:

* `check` => Se encarga de revisar que el código compile sin producir
ejecutables.
* `clean` => Elimina el directorio `target/`.
* `doc` => Construye el paquete y sus dependencias con documentación.
* `init` => Crea un nuevo proyecto en un directorio existente.
* `test` => Ejecuta las pruebas.
* `bench` => Ejecuta puntos de referencia.
* `update` => Actualiza las dependencias de `Cargo.lock`.
* `search` => Busca `crates` en el registro.
* `publish` => Publica el paquete actual al registro.
* `install` => Instala un binario de Rust en `$HOME/.cargo/bin`.
* `uninstall` => Desinstala un binario de Rust.

La ventaja de Cargo es que los comandos que se pueden ejecutar son
independientes de cualquier plataforma por lo que funciona de la
misma manera en Windows, MacOS y Gnu/Linux.

## Liberar un paquete

Cuando hayas terminado tu proyecto solo necesitarás la bandera
`--release` para generar un binario optimizado, esto generará un
binario ejecutable en el directorio `target/release`.

Por ahora has aprendido a utilizar Cargo y a crear un pequeño hola mundo
en Rust, pero imprimir mensajes de ese tipo en la consola no es divertido
por lo que en el siguiente capítulo crearemos un programa llamado
*"FizzBuzz"* el cual es una pregunta utilizada en las entrevistas de
programación.

¡Prepárate para comenzar a utilizar Cargo de verdad!