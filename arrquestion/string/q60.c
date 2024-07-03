#include<stdio.h>
int main()
{
int arr[]={1,2,3,4,5,6,7,8};
int len =sizeof(arr)/sizeof(int);
int start=0;
int end=len-1;
int mid=(start+end)/2;
int find=7;
int flag=0;
for(int i=0; i<len; i++)
{
  if(arr[mid]==find)
  {
    flag=mid;
    break;
  }
  else if(arr[mid]>find)
  {
       end=mid-1;
  }
  else if(arr[mid]<find)
  {
    start=mid+1;
  }
  mid =(start+end)/2;
  
}
if(flag==0)
{
  printf("not found is :");
}
else 
{
  printf("found is :%i index is :%i",find,flag);
}
return 0 ;
}