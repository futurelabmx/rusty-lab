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

Atom es un editor de texto desarrollado por GitHub utilizando la biblioteca
*Electron*, es extensible y fácil de utilizar.

Eficiencia de atom en Rust:

* Resaltado de sintaxis (Plugin)
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

---

## Emacs

Emacs es un editor de texto extensible, personalizable y libre, escrito
en Lisp.

Eficiencia de emacs en Rust:

* Resaltado de sintaxis (Plugin)
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

---

## Sublime text 2/3

Sublime text es un editor de texto escrito en C++, extensible y poderoso
para editar código fuente.

Eficiencia de sublime text en Rust:

* Resaltado de sintaxis
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

---

## Vim/Neovim
Vim es un editor de texto extensible, altamente personalizable y útil
para casi cualquier propósito, se incluye como reemplazo de `vi` en la
mayoría de los sistemas operativos tipo UNIX.

Eficiencia de Vim/Neovim en Rust:

* Resaltado de sintaxis (Plugin)
* Snippets (Plugin)
* Autocompletado (Plugin + Racer)
* Linternas (Plugin + Racer)
* Formato de código (Plugin)
* Ir a la definición (Plugin + Racer)
* ~~Depuración~~ (Sin soporte)
* Tooltips de documentación (Plugin + Racer)

### Plugins de Vim/Neovim para Rust

* [rust.vim](https://github.com/rust-lang/rust.vim)
* [YouCompleteMe-rust](http://blog.jwilm.io/youcompleteme-rust)
* [vim-racer](https://github.com/racer-rust/vim-racer)
* [syntastic](https://github.com/scrooloose/syntastic)
* [UltiSnips](https://github.com/sirver/ultisnips)

---

## VSCode / Visual Studio Code / VSCodium

* VSCode es una herramienta que combina la simplicidad de un editor de
texto con las necesidades de los desarrolladores. (VSCode es el proyecto
padre de Visual Studio Code y VSCodium).

* Visual Studio Code es un editor derivado de VSCode el cual es
clonado por Microsoft y modificado con telemetría, llaves de API
cerradas y herramientas de integración avanzada.

* VSCodium es un derivado de VSCode el cual es una compilación del mismo
que provee un editor 100 FLOSS (Free, Libre and Open Source Software).
Por lo que este no contiene telemetría o rastro alguno de la marca de
Microsoft, ideal para los entusiastas del software libre.

Eficiencia de VSCode en Rust:

* Resaltado de sintaxis (Plugin)
* Snippets (Plugin)
* Autocompletado (Plugin + Racer)
* Linternas (Plugin)
* Formato de código (Plugin)
* Ir a la definición (Plugin + Racer)
* Depuración (Plugin)
* Tooltips de documentación (Plugin + Racer)

### Plugins de VSCode para Rust

* [Rust (RLS)](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust)
* [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb)
* [Debug](https://marketplace.visualstudio.com/items?itemName=webfreak.debug)
* [TOML Language Support](https://marketplace.visualstudio.com/items?itemName=be5invis.toml)

---

## Eclipse

Eclipse es un Entorno de Desarrollo Integrado (IDE) escrito en Java
el cual está compuesto por un conjunto de herramientas que le garantizan
extensibilidad y poder para el desarrollo multiplataforma.

Eficiencia de Eclipse en Rust:

* Resaltado de sintaxis (Plugin)
* Snippets (Plugin)
* Autocompletado (Plugin)
* Linternas (Plugin)
* Formato de código (Plugin)
* Ir a la definición (Plugin)
* Depuración (Plugin)
* Tooltips de documentación (Plugin)

### Plugins de Eclipse para Rust

* [Corrosion](https://github.com/eclipse/corrosion)

---

## IntelliJ IDEA

IntelliJ IDEA es un IDE desarrollado por la compañía JetBrains hecha en
Kotlin, Java y Python, cuenta con las ediciones de pago y comunitaria.

Eficiencia de IntelliJ en Rust:

* Resaltado de sintaxis (Plugin)
* Snippets (Plugin)
* Autocompletado (Plugin)
* Linternas (Plugin)
* Formato de código (Plugin)
* Ir a la definición (Plugin)
* Depuración (Plugin)
* Tooltips de documentación (Plugin)

### Plugins de IntelliJ para Rust

* [intellij-rust](https://intellij-rust.github.io/)

---

## Visual Studio

Visual Studio es un IDE disponible para las plataformas de Microsoft
Windows y Mac OS el cual posee todas las características para
desarrollar software en Android, iOS, Windows, Web y Cloud Computing.

Eficiencia de Visual Studio en Rust:

* Resaltado de sintaxis
* ~~Snippets~~ (Sin soporte)
* Autocompletado (Plugin + Racer)
* ~~Linternas~~ (Sin soporte)
* ~~Formato de código~~ (Sin soporte)
* Ir a la definición (Plugin)
* Depuración (Plugin)
* ~~Tooltips de documentación~~ (Sin soporte)

### Plugins de Visual Studio para Rust

* [Visual Rust](https://github.com/PistonDevelopers/VisualRust)

---

## GNOME Builder

GNOME Builder es un IDE desarrollado en C para la plataforma Gnu/Linux
el cual cuenta con búsqueda global, autocompletado, mini-mapa,
documentación y edición avanzada.

Eficiencia de Builder en Rust:

* Resaltado de sintaxis
* Snippets
* Autocompletado 
* Linternas
* ~~Formato de código~~ (Sin soporte)
* Ir a la definición
* ~~Depuración~~ (Sin soporte)
* ~~Tooltips de documentación~~ (Sin soporte)

---

## Otros editores que soportan Rust:

* BBEdit
* Midnight Commander
* Geany
* gedit
* Kate
* Textadept
* Ride
* Solid Oak

---