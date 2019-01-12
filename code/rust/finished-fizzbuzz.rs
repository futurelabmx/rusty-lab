extern crate colored;

use colored::*;
use std::io;

fn main() {
    let mut entrada = String::new();
    println!("Ingrese el número de iteraciones deseadas:");
    io::stdin().read_line(&mut entrada).unwrap();

    let iter: i32 = entrada.trim().parse().unwrap();

    for x in 0..=iter {
        match (x % 3, x % 5) {
            (0, 0) => println!("{}", "FizzBuzz".cyan()),
            (0, _) => println!("{}", "Fizz".red()),
            (_, 0) => println!("{}", "Buzz".yellow()),
            (_, _) => println!("{}", x),
        }
    }
}
