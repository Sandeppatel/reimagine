#include<stdio.h>
int main(){
    int arr[]={1,-23,56,-69,36};
    int len=sizeof(arr)/sizeof(int);
     printf("positive element :");
    for(int i=0; i<len; i++)
    {
        if(arr[i]>=0)
        {
          printf(" %i ",arr[i]);
        }
    }
     printf("\n negetive element :");
     for(int i=0; i<len; i++)
    {
        if(arr[i]<0)
        {
          printf(" %i ",arr[i]);
        }
    }
    return 0;
}