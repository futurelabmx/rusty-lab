#include <stdio.h>

int main(int argc, char const *argv[])
{
        int edad = 20;
        //C no permite la ñ
        printf("Tienes %d anios\n", edad);

        edad = 21;
        printf("Ahora tienes %d anios\n", edad);
        return 0;
}
