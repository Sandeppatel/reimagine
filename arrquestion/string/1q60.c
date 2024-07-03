#include<stdio.h>
int main()
{
char str1[]="sandeep";
char str2[]="patel";
int len1=0;
while(str1[len1]!='\0')
{
    len1++;
}
int len2=0;
while(str2[len2]!='\0')
{
    len2++;
}
int lenth=len1+len2+1;
char copy[lenth];
int  prog=0;
for(int i=0; i<lenth; i++)
{
    if( prog<len1)
    {
         copy[i]=str1[prog];
         prog++;
    }
    else //if(prog<len2)
    {
        copy[i]=str2[prog-len1];
        prog++;
    }
}
copy[lenth-1]='\0';
printf("%s",copy);

return 0 ;
}