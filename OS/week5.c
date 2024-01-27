#include <stdio.h>
#include <unistd.h>

int main()
{
    pid_t pid1, pid2;

    // create p1
    pid1 = fork();

    if (pid1 == 0)
    {
        printf("P1(pid = %d) created.\n", getpid());

        // create p2
        pid2 = fork();
        if (pid2 == 0)
        {
            printf("P2(pid = %d) created\n");
            printf("P2's parent is p1(pid = %d)", getppid());
        }
        else
        {
            printf("P1(pid = %d) is waiting for P2(pid = %d) to complete.\n", getpid(), pid2);
            wait(NULL);
            printf("P2(pid = %d) completed.\n", pid2);
        }
    }
    else
    {
        printf("P(pid = %d) is created.\n", getpid());
        printf("P1's parent is P(pid = %d)", getpid());
        wait(NULL);
        printf("P1(pid = %d) completed.\n", pid1);
    }

    return 0;
}