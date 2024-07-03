#include<stdio.h>
int main()
{
int size;
printf("size batao :");
scanf("%i",&size);
int arr[size];
for(int i=0; i<size; i++)
{
    scanf("%i",&arr[i]);
}
int str=0;
int end=size-1;
int mid=(str+end)+2;
int find=2;
int flag=-1;
for(int i=0; i<size; i++)
{
    if(arr[mid]==find)
    {  
        flag=mid;
        //printf("found is :%i index is:%i",find,mid);
       break;
    }
    else if(arr[mid]<find)
    {
        str=mid+1;
    }
    else if(arr[mid]>find)
    {
        end=mid-1;
    }
    mid=(str+end)/2;
    flag=mid;
    break;
}
if(flag==-1)
{
    printf("not found");
}
else
{
    printf("found is :%i index is:%i",find,flag);
}
return 0 ;
}