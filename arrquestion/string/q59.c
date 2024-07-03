#include<stdio.h>
int main()
{
char str[]="1 2 ka 4 , 4 3 ka 1 my name is sheryians";
int digit=0, alph=0, spacilchar=0;

for(int i=0; i<str[i]!='\0'; i++)
{
    if(str[i]<='0' && str[i]>='9')
    {
     digit++;
    }
    else if((str[i]>='a' && str[i]<='z') ||(str[i]>='A' && str[i]<='Z') )
    {
   alph++;
    }
    else if(str[i]!=' ')
    {
      spacilchar++;
    }
    
}
printf("\n number of digit %i",digit);
printf("\n number of alph %i",alph);
printf(" \n number of spacilchar %i",spacilchar);
return 0 ;
}