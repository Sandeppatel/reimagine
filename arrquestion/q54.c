#include<stdio.h>
int main()
{
char str1[]="labrador gaye";
char str2[]="labrador gaye";
int len1= sizeof(str1)/sizeof(char);
int len2= sizeof(str2)/sizeof(char);
for(int i=0; i<len1; i++)
{
    if(str1[i]!=str2[i])
    {
        printf("not indetical");
        return 0;
    }
}
printf("indentical");
return 0 ;
}