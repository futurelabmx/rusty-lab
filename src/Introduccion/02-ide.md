# ¡Hora de elegir un editor!

Bien, empecemos con las malas noticias: Rust no tiene un IDE oficial, de hecho
no existen IDEs 100% funcionales que estén dedicados enteramente a Rust, por
lo que necesitarás elegir entre los editores de texto que rondan por la
comunidad o si ya utilizas uno necesitarás descargar los plugins necesarios.

> Todos los datos de esta página fueron extraidos de la página
> [ARE WE IDE YET?](https://areweideyet.com/). Nosotros solo simplificaremos
> lo establecido ahí.

Se indicarán los requerimientos entre paréntesis.

## ATOM

Atom es un editor de texto desarrollado por Github utilizando la biblioteca
*Electron*, es extensible y fácil de utilizar.

Eficiencia de atom en Rust:

* Resaltado de sintáxis (Plugin)
* Snippets (Plugin)
* Autocompletado (Plugin)
* Linternas (Plugin)
* Formato de código (Plugin)
* Ir a la definición (Plugin)
* ~~Depuración~~ (Sin soporte)
* Tooltips de documentación (Plugin)

### Plugins de ATOM para Rust

* [language-rust](https://atom.io/packages/language-rust).
* [ide-rust](https://atom.io/packages/ide-rust) <- Este plugin instala
el plugin `language-rust` y `atom-ide-ui`, provee al usuario con
`rustfmt`, `racer` y funciones de IDE utilizando el `rls`.
* [linter-rust](https://atom.io/packages/linter-rust)
depende del plugin `linter`.
* [racer](https://atom.io/packages/racer)
* [rustfmt](https://atom.io/packages/rustfmt)
* [tokamak](https://vertexclique.github.io/tokamak/)
* [build-cargo](https://atom.io/packages/build-cargo) depende de
`build` y `linter`.
* [atom-beautify](https://atom.io/packages/atom-beautify)
* [languageserver-rust](https://atom.io/packages/languageserver-rust)


## Emacs

Emacs es un editor de texto extensible, personalizable y libre, escrito
en Lisp.

Eficiencia de emacs en Rust:

* Resaltado de sintáxis (Plugin)
* Snippets (Plugin)
* Autocompletado (Plugin + Racer)
* Linternas (Plugin)
* Formato de código (Plugin)
* Ir a la definición (Plugin + Racer)
* ~~Depuración~~ (Sin soporte)
* Tooltips de documentación (Plugin + Racer)

### Plugins de Emacs para Rust

* [rust-mode](https://github.com/rust-lang/rust-mode)
* [flycheck-rust](https://github.com/flycheck/flycheck-rust)
* [emacs-racer](https://github.com/racer-rust/emacs-racer)
* [rust-snippets](https://github.com/freebroccolo/rust-snippets)


## Sublime text 2/3

Sublime text es un editor de texto escrito en C++, extensible y poderoso
para editar código fuente.

Eficiencia de sublime text en Rust:

* Resaltado de sintáxis
* Snippets
* Autocompletado (Plugin + Racer)
* Linternas
* Formato de código (Plugin)
* Ir a la definición (Plugin + Racer)
* ~~Depuración~~ (Sin soporte)
* ~~Tooltips de documentación~~ (Sin soporte)

### Plugins de Sublime Text para Rust

* [TOML](https://packagecontrol.io/packages/TOML)
* [Rust Enhanced](https://packagecontrol.io/packages/Rust%20Enhanced)
* [YouCompleteMePlugin](https://packagecontrol.io/packages/YcmdCompletion)
* [BeautifyRust](https://packagecontrol.io/packages/BeautifyRust)


## Vim/Neovim


## VSCode / Visual Studio Code / VSCodium


## Eclipse


## IntelliJ IDEA


## Visual Studio


## GNOME Builder