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