def fizzbuzz(x):
    """Simple FizzBuzz, courtesy of @RodolfoFerro on @GitHub"""

    if x % 3 == 0 and x % 5 == 0:
        return "FizzBuzz"
    elif x % 3 == 0:
        return "Fizz"
    elif x % 5 == 0:
        return "Buzz"
    else:
        return str(x)

if __name__ == '__main__':
    sequence = '\n'.join(fizzbuzz(x) for x in range(1, 100))
    print(sequence)
