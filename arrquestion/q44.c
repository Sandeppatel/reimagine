#include<stdio.h>
int main()
{
    int arr[]={1,2,3,4,5,6,7,8};
    int len= sizeof(arr)/sizeof(int);
 int k=3;
 int cod[len];
 int chec=0;
 for(int i=len-1; i>=len-k; i--)
 {
  cod[chec]=arr[i];
  chec++;
 }
 for(int i=0; i<len-k; i++)
 {
  cod[chec]=arr[i];
  chec++;
 }
 for(int i=0; i<len; i++)
 {
    printf("%i ",cod[i]);
 }
    return 0;
}