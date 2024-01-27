#include <fcntl.h>
#include <stdio.h>
#include <unistd.h>

int main()
{
    int fd;

    fd = open("file.txt", O_WRONLY | O_CREAT, 0644);

    if (fd == -1)
    {
        perror("can't open file");
        return 1;
    }

    close(fd);

    return 0;
}