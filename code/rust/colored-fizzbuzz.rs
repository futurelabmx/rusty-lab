extern crate colored;

use colored::*;

fn main() {
    for x in 0..{
        match (x % 3, x % 5) {
            (0, 0) => println!("{}","FizzBuzz".cyan()),
            (0, _) => println!("{}","Fizz".red()),
            (_, 0) => println!("{}","Buzz".yellow()),
            (_, _) => println!("{}", x)
        }
    }
}