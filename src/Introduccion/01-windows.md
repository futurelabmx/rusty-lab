# Instalación en Microsoft Windows

En este apartado instalaremos las herramientas necesarias para programar
en el lenguaje de programación Rust dentro de un sistema operativo Microsoft
Windows.

## Instalar Rustup 

Lo primero que necesitamos es `rustup`,  el cual es un instalador del
lenguaje y sus respectivas herramientas.

> [Sitio oficial de Rustup](https://rustup.rs/)

Si estás en una instalación de 64 bits te recomendamos instalar
utilizando el siguiente [enlace](https://win.rustup.rs/x86_64).

En caso contrario puedes usar el [instalador](https://win.rustup.rs/i686)
de 32 bits.

No te preocupes si resulta confuso al inicio, el instalador de Rust
te guiará paso a paso en el proceso.

Si te consideras un novato en el lenguaje te recomendamos mantener los
ajustes de instalación por defecto.

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