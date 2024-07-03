#include<stdio.h>
int main()
{
char str[]="lekl";
int len = sizeof(str)/sizeof(char);
int start=0;
int end=len-2;
for(int i=start; i<end; i++)
{
    if(str[start]!=str[end])
    {
        printf("not palindron");
        return 0;
    }
      start++;
        end--;
}
  
printf("palindron");
return 0 ;
}