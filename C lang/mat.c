#include <stdio.h>

int main()
{
    int a[2][2], b[2][2];
    int i,j;
    for ( i = 0; i < 2; i++)
    {
        for ( j = 0; j < 2; j++)
        {
            scanf("%d", &a[i][i]);
        }
    }
    for (i = 0; i < 2; i++)
    {
        for ( j = 0; j < 2; j++)
        {
            scanf("%d", &b[i][i]);
        }
    }
    for (i = 0; i < 2; i++)
    {
        for ( j = 0; j < 2; j++)
        {
            printf("%d ", a[i][i]+b[i][j]);
        }
        printf("\n");
    }
}
