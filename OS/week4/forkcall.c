#include <unistd.h>
#include <stdio.h>

int main()
{
    pid_t pid;

    pid = fork();

    if (pid == -1)
    {
        perror("can't create a process");
        return 1;
    }
    if (pid == 0)
    {
        printf("This is child process.\n");
    }
    else
    {
        printf("This is parent's process.\n");
    }

    return 0;
}
