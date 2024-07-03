/*#include<stdio.h>
int main(){
    int arr[]={1,2,3,4,5,6,7,8};
    int len=sizeof(arr)/sizeof(int);
    int sum=0;
    for(int i=0; i<len; i++)
    {
        sum=sum+arr[i];
    }
    printf("sum of all array element :%i" ,sum);
    return 0;
}*/
#include<stdio.h>
int main(){
    int arr[]={1,2,3,4,5,6,7,8};
    int len =sizeof(arr)/sizeof(int);
    int find=7;
    int flag=-1;
    for(int i=0; i<len; i++)
    {
        if(arr[i]==find)
        {  
            flag=i; 
            break;
        }
        else
        {
          flag=-1;
        }
    }
    if(flag==-1)
    {
        printf("not found is :%i",flag);
    }
    else
    {
         printf("found is a:%i index is a: %i",find,flag);
    }
    return 0;
}