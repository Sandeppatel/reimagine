#include<stdio.h>
int main()
{
char str[]=" S H O O T V E E R";
int len=0;
while(str[len]!='\0')
{
    if(str[len]==' ')
    {
        len++;
    }

    printf("%c",str[len]);
    len++;
}

return 0 ;
}