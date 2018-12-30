# Instalación en Gnu/Linux

La instalación en Gnu/Linux es la instalación mas utilizada por los
programadores del lenguaje Rust.

Antes de empezar, toma un aviso de nosotros, muchas distribuciones de GNU/Linux
ya poseen Rust y sus herramientas en los repositorios oficiales, si bien esto
lleva a una instalación rápida las versiones de Rust que ofrecen pueden no
estar en su versión mas actual, excluyendo al usuario de la mayor parte de
características nuevas que las actualizaciones pueden ofrecer.

Puedes instalar desde la terminal provista por tu sistema operativo ejecutando
el siguiente comando:

`curl https://sh.rustup.rs -sSf | sh`

Con esto descargaremos la versión mas actual de Rustup y procederemos con la
instalación del lenguaje.

No te preocupes si resulta confuso al inicio, el instalador de Rust
te guiará paso a paso en el proceso.

Si te consideras un novato en el lenguaje te recomendamos mantener los
ajustes de instalación por defecto.

Para actualizar tus herramientas de Rust necesitaras ejecutar el comando
`$ rustup update`.

## Configurar la variable de entorno

Al proceder con la instalación de Rust, todas las herramientas se
almacenarán en el directorio `~/.cargo/bin`, ahí encontrarás todo el
software que has descargado como `rustc`, `cargo` y `rustup`.

Es opcional (y conveniente) incluir este directorio en una variable de
entorno, durante la instalación `rustup` intentará configurar dicha
variable definida como `PATH`. Como todas las líneas de comandos son
diferentes las modificaciones hacia `PATH` podrían no surtir efecto
hasta que se reinicie la consola, al salir de la sesión o puede no
funcionar del todo, por lo que como usuario te tocará corregir este
error por tus medios.

Si no funciona la modificación de la variable `PATH` en el archivo `~/.profile`
puedes pegar la siguiente línea en tu archivo `.bashrc` (o cualquier archivo de
configuración de la shell que utilices).

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

Si deseas empaparte con un poco más de información continúa leyendo o
si consideras que la instalación es suficiente puedes pasar al siguiente
capítulo.

## Los canales de actualización

El desarrollo de Rust es muy activo, por lo que opera en tres canales de
distribución:

* Stable
* Beta
* Nightly

Si eres un usuario novel te recomendamos mantenerte en el canal `Stable`.

> Los canales `Beta` o `Nightly` son para aquellos valientes que desean
> probar características mas nuevas del lenguaje aunque a veces son
> necesarios para algunas herramientas.

Vamos a explicar/traducir el proceso de liberación de Rust como viene
explicado en el [libro](https://doc.rust-lang.org/book/appendix-07-nightly-rust.html?highlight=channel#choo-choo-release-channels-and-riding-the-trains):

> Necesitarás conocimientos básicos de Git para entender algunas cosas.

Cada vez que se añade una característica a Rust, se crea un *commit* en
la rama `master` del repositorio. Esto pasa con frecuencia ya que la
comunidad de Rust es muy activa, por lo tanto cada noche una nueva
versión del canal `Nightly` se produce, es decir, todos los días se
libera una nueva versión con el *hash* del último commit aceptado dentro
de `Nightly`, la rama `master` durante el transcurso del día podría
verse algo así:

`nightly: * - - * - - *`

> Cada `*` representa un *commit*.

Como los ciclos de liberación son fijos cada seis semanas el equipo de
desarrollo de Rust se prepara para liberar una nueva versión, antes que
nada primero deben migrar los cambios, por lo que la rama `beta` sale
de la rama `master` y con eso tendremos nuestra liberación `beta`.

```ignore
nightly: * - - * - - *
                     |
beta:                *
```

La mayoría de los usuarios de Rust no utiliza este canal de forma
activa, en su lugar utilizan *Sistemas de Integración Continua* para
detectar cualquier posible regresión o error. Mientras esto ocurre, la
rama `master` continúa actualizandose.

```ignore
nightly: * - - * - - * - - * - - *
                     |
beta:                *
```

En caso de que una regresión se encuentre las cosas apuntan a nuestro
favor, pues la edición `beta` primero fue probada antes de enviar los
cambios a la versión estable, lo que se hace en estos casos es aplicar
un parche en la rama `master` y después migrarlo a la rama `beta`.

```ignore
nightly: * - - * - - * - - * - - * - - *
                     |
beta:                * - - - - - - - - *
```

Seis semanas después de la liberación de la rama `beta` es tiempo de
enviar una nueva versión estable, por lo que una rama llamada `stable`
saldrá de la rama `beta`:

```ignore
nightly: * - - * - - * - - * - - * - - * - * - *
                     |
beta:                * - - - - - - - - *
                                       |
stable:                                *
```

Bien, una nueva versión de Rust está lista para usarse, pero tenemos
que considear algo y es que han pasado 6 semanas, por lo que una nueva
versión `beta` viene en camino, por lo tanto cada que se libera una
versión estable, se crea una nueva versión beta.

## Herramientas de desarrollo para Rust

* Racer (Nightly): `cargo install racer`.
* rustfmt (Stable - Nightly): `rustup component add rustfmt`.
* rust-doc (Stable - Nightly): `rustup component add rust-doc`.

Si deseamos una integración propia con un IDE debemos de instalar
[rls](https://github.com/rust-lang/rls) el cual es un servidor de
lenguaje que nos ayudará con el resaltado de errores en tiempo real
y nos proporcionará de otras funciones útiles.

* RLS (Stable - Nightly):
`rustup component add rls-preview rust-analysis rust-src`

¡Listo! Con esto tenemos nuestro entorno base para escribir programas en Rust.
Ahora tenemos que elegir un IDE para empezar a desarrollar.

Ve al capítulo **2.4** para ver nuestras recomendaciones o al capítulo **3** si
deseas comenzar a escribir tus programas en Rust.