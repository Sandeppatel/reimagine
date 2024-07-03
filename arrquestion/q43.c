#include <stdio.h>

int main() {
    int n,a,b, sum = 0;

    scanf("%d", &n);
   int rem= n % 10;
      b=rem;
   int copy=n;
    while (n>0) {
      n=n/10;
    }
    a=n;

    printf("%i %i ",a,b);
    sum=a+b;

   
    printf("The sum of the first and last digits of %d is: %d\n", copy, sum);

    return 0;
}
