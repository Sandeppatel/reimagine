#include<stdio.h>
int main()
{
char str[]="haan bhoola main jahan main masti main ghoomun main karta dua ke hasti rahe tu";
int arr[200];
for(int i=0; i<200; i++)
{
    arr[i]=0;

}
int i=0;
while(str[i]!='\0')
{
    arr[str[i]]++;
    i++;
}
int maxindex=0;
for(int i=0; i<200; i++)
{
    if(arr[i]>arr[maxindex] && i!=0)
    {
        maxindex=i;
    }
}
printf("%c",maxindex);
return 0 ;
}